using ReservationSystem; 
public interface IReservationservice{

    public void AddReservation(Reservation reservation,string reserverName);
    public void DeleteReservation(Reservation reservation);
    public void DisplayWeeklySchedule();

}