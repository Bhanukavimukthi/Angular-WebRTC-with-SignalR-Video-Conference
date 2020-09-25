using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;

namespace ConferenceTest.Hubs
{
    public interface users
    {

    }

    public static class Users
    {
       public static string Name { get; set; }
       public static List<UserInRoom> userList { get; set; }
    }


    public class UserInRoom
    {
        public string RoomId { get; set; }
        public string ConnectionId { get; set; }
        public string UserName { get; set; }
        public string location { get; set; }
    }



    public class PeeringHub : Hub
    {
        public static List<UserInRoom> CurrentConnections = new List<UserInRoom>();
        //private static HashSet<UserInRoom> CurrentConnections = new HashSet<UserInRoom>();

        public async Task Connect(string roomId, string userName, string location)
        {

            if (CurrentConnections.Count(x => x.ConnectionId == Context.ConnectionId) == 0)
            {
                CurrentConnections.Add(new UserInRoom { RoomId = roomId, ConnectionId = Context.ConnectionId, UserName = userName, location = location });
            }
            await Groups.AddToGroupAsync(Context.ConnectionId, roomId);
            if (CurrentConnections.Any(x => x.RoomId == roomId) == true)
            {

                var temp = CurrentConnections.Where(x => x.RoomId == roomId);
                await Clients.Group(roomId).SendAsync("locationser", temp);
            }
            Console.WriteLine("The client " + userName + " has been added to the room " + roomId);

        }


        public override async Task OnDisconnectedAsync(Exception exception)
        {
            try
            {
                // we get the room in which the user was
                UserInRoom userDisconnected = CurrentConnections.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);

                // then we send a message to every client of the room for them to act accordingly

                await Clients.OthersInGroup(userDisconnected.RoomId).SendAsync("peerHasLeft", userDisconnected.ConnectionId);


                await Groups.RemoveFromGroupAsync(userDisconnected.ConnectionId, userDisconnected.RoomId);


                if (userDisconnected != null)
                    CurrentConnections.Remove(userDisconnected);

                await base.OnDisconnectedAsync(exception);

            }
            catch (NullReferenceException e)
            {

            }
        }

        public async Task userleft()
        {

            UserInRoom userDisconnected = CurrentConnections.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);

            // then we send a message to every client of the room for them to act accordingly
            await Clients.OthersInGroup(userDisconnected.RoomId).SendAsync("userLeft", userDisconnected.ConnectionId);
            await Groups.RemoveFromGroupAsync(userDisconnected.ConnectionId, userDisconnected.RoomId);

            if (userDisconnected != null)
                CurrentConnections.Remove(userDisconnected);
        }

        public async Task SendOffer(string offer, string peerUser)
            => await Clients.Client(peerUser).SendAsync("ReceiveOffer", offer, Context.ConnectionId);


        public async Task SendAnswer(string answer, string peerUser)
            => await Clients.Client(peerUser).SendAsync("ReceiveAnswer", answer, Context.ConnectionId);

        public async Task SendIceCandidate(string iceCandidate, string peerUser)
            => await Clients.Client(peerUser).SendAsync("AddIceCandidate", iceCandidate, Context.ConnectionId);

        public async Task test(string peeruser)
            => await Clients.Client(peeruser).SendAsync("testreceived");

        //public async Task allUsers(string roomId)
        //{
        //    if (CurrentConnections.Any(x => x.RoomId == roomId) == true)
        //    {
        //        await Clients.Group(roomId).SendAsync("locationser", CurrentConnections);
        //    }

        //}

        //public async Task SendIceCandidate(string candidate, string peerUser)
        //    => await Clients.Client(peerUser).SendAsync("ReceiveIceCandidate", candidate, Context.ConnectionId);

        //return list of all active connections
        public string GetAllActiveConnectionsInRoom(string roomId)

            => JsonSerializer.Serialize(CurrentConnections.Where(user => user.RoomId == roomId && user.ConnectionId != Context.ConnectionId).ToList());
            
    }
    //public void asd()
    //{
    //    System.Diagnostics.Debug.WriteLine("blah");
    //}
}