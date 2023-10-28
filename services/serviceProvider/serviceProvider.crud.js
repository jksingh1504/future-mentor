const serviceProvider = require("../../model/serviceProviders/serviceProvider.model.js");
const { sendMail } = require("../../utilities/sendMail.js");
module.exports = {
  addServiceProviders,
  getByServiceId,
  getById,
  bookAppointment,
};

async function addServiceProviders(serviceProviderDetails) {
  try {
    const newServiceProvider = new serviceProvider(serviceProviderDetails);
    await newServiceProvider.save();
    return newServiceProvider;
  } catch (error) {
    throw error;
  }
}
async function getByServiceId(req) {
  try {
    const { serviceRef } = req.query;
    const serviceProviders = await serviceProvider.find({
      serviceRef,
    });
    return { serviceProviders };
  } catch (error) {
    throw error;
  }
}
async function getById(req) {
  try {
    const { serviceProviderId } = req.query;
    const serviceProviderDetails = await serviceProvider.findOne({
      _id: serviceProviderId,
    });
    return { serviceProviderDetails };
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
      serviceProviderDetails,
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
      serviceProviderDetails.email,
      "Appointment request recieved (Healthify app)",
      `<p style="margin-bottom:24px">Hi ${serviceProviderDetails.name} Team,</p>
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
