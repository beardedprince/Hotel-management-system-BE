### Hotel Management System Backend

### Feature

- [x] Admin can register, logn,  create rooms, edit rooms and delete rooms
- [x] Admin can manage rooms
- [x] Users can view its bookings
- [x] Rooms count
- [x] Bookings count
- [x] Available rooms count
- [x] Unvailable rooms count
- [ ] Get login between booked room and room status




## API docs

### Routes

- `/api/register`: Allows Admin to register.
- `/api/login`: Allows admin to login .
- `/api/users`: Get all registered users(Admin) .

- `/api/booking/:id`: this route POST(creates) a booking specific to the room number (roomID) .
- `/api/bookings`: this route get all bookings and its been populated by the roomID .
- `/api/booking/guest/:id`: this route get a booking of a guest by its ID.
- `/api/all-bookings`: this route get all bookings count.


- `/api/room`: this route POST(creates) a new room .
- `/api/rooms`: this route get all rooms .
- `/api/room/available`: this route get count of available rooms.
- `/api/room/unavailable`: this route get count of unavailable rooms.
- `/api/room/:id`: this route gets a room by its ID using the GET.
- `/api/room/:id`: this route updates a room using the PUT method.
- `/api/room/:id`: this route deletes a room using the DELET method.
- `/api/allrooms`: this route get count of all rooms.


