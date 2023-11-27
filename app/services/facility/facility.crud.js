const facility = require("../../model/facility/facility.model.js");
const { sendMail } = require("../../utilities/sendMail.js");
module.exports = {
  addFacility,
  getByCategoryRef,
  getById,
  bookAppointment,
};

async function addFacility(facilityDetails) {
  try {
    const newFacility = new facility(facilityDetails);
    await newFacility.save();
    return newFacility;
  } catch (error) {
    throw error;
  }
}
async function getByCategoryRef(req) {
  try {
    const { categoryRef } = req.query;
    const facilityDetails = await facility.find({
      categoryRef,
    });
    return { facilityDetails };
  } catch (error) {
    throw error;
  }
}
async function getById(req) {
  try {
    const { facilityId } = req.query;
    const facilityDetails = await facility.findOne({
      _id: facilityId,
    });
    return { facilityDetails };
  } catch (error) {
    throw error;
  }
}
async function bookAppointment(params) {
  try {
    const {
      HospitalName,
      DoctorName,
      AppointmentDate,
      AppointmentTime,
      facilityDetails,
      userDetails,
    } = params;
    sendMail(
      userDetails.email,
      "Appointment request confirmation (Healthify app)",
      `<p style="margin-bottom:24px">Hi ${userDetails.userName},</p>
      <p>Your request for Appointment at ${HospitalName} with, ${DoctorName}, on date ${AppointmentDate}, at Time ${AppointmentTime} has been registered.</p>
      <p>Our service Executive will reach you out as we get a slot for you.</p>
      <p style="margin-bottom:24px">Thank you for you patience and understanding</p>
      <p>Regards,</p>
      <b>Healthify Team.</b>
      `
    );
    sendMail(
      facilityDetails.email,
      "Appointment request recieved (Healthify app)",
      `<p style="margin-bottom:24px">Hi ${facilityDetails.name} Team,</p>
      <p>You have got an appointment request at ${HospitalName} with, ${DoctorName}, on date ${AppointmentDate}, at Time ${AppointmentTime} by Mr./Ms. ${userDetails.userName}.</p>
      <p>The user's email is ${userDetails.email}, and contact is ${userDetails.contact}.</p>
      <p style="margin-bottom:24px">Please check your appointment log and contact to the user in case of a confirmed appointment.</p>
      <p>Regards,</p>
      <b>Healthify Team.</b>
      `
    );
    return "We have successfully registered you request for appointment! Our customer executive will reach out to use shortly.";
  } catch (error) {
    throw error;
  }
}
