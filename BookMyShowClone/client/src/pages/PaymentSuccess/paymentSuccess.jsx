import { message } from "antd";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BookShowTickets } from "../../ApiCalls/booking";
import { ShowLoading, HideLoading } from "../../redux/loadersSlice";

console.log("🚀 PaymentSuccess mounted");

function PaymentSuccess() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const finalizeBooking = async () => {
      try {
        dispatch(ShowLoading());

        const transactionId = searchParams.get("session_id");
        const pendingBooking = JSON.parse(
          localStorage.getItem("pending-booking")
        );

        if (!transactionId || !pendingBooking) {
          message.error("Invalid payment session");
          navigate("/");
          return;
        }

        const response = await BookShowTickets({
          show: pendingBooking.showId,
          seats: pendingBooking.seats,
          user: pendingBooking.userId,
          transactionId,
        });

        if (response.success) {
          message.success("Payment successful. Show booked!");
          localStorage.removeItem("pending-booking");
          navigate("/profile");
        } else {
          message.error(response.message);
          navigate("/");
        }

        dispatch(HideLoading());
      } catch (error) {
        dispatch(HideLoading());
        message.error(error.message);
        navigate("/");
      }
    };

    finalizeBooking();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="text-lg">Finalizing your booking...</h1>
    </div>
  );
}

export default PaymentSuccess;
