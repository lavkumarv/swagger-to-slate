 title: Appointy API Reference

 language_tabs:
    curl
    .Net
 
 toc_footers:
    <a href='#'>For Developers</a>
 
 includes:
    errors
 
 search: true
 ---
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Addons
 ## Addon Object
 This object represnts the addons. Addons are something that has been or can be added to an existing object or arrangement.
 
 So here addons are added to services without any extra time. These are optional. Eg. in salon with Hair cut service shampoo can be addon.
 
 Attribute | Description
 --------- | ----------
 title (String) | Name of the addons. 
 value (String) | 
 cost (String) | price of the addons. 
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Appointments
 ## Appointment Object
 
 This represents the appointment object. Which store the all information regarding an appointment like. customer info who is taking booking, service name, cost, timing etc.
 
 
 Attribute | Description
 --------- | ----------
  Id  (Integer) | Unique Id assign to each Appointment (For internal use only)
  ServiceId  (Integer) | The Id of the service for which appointment is booked. <br> Eg.  If the customer is booking Haircut service than its service ID 115 will be sent.
  StaffId (Integer) | The Id of the staff who is going to manage the customer. 
  CustomerId (Integer) | Customer Id who is taking an appointment.
  StartTime (DateTime) | Start Time when appointment is starting. This time is in Business Timezone. Eg. If Business timezone is in US than It will tore time in US timezone.
  EndTime (DateTime) |  End time when appointment is ending. This time is in Business Timezone. Eg. If Business timezone is in US than It will tore time in US timezone.
  Cost  | The cost of the appointment including the addons cost.
  CustomForm | It is custom form object which is custom form created by the business.
  DiscountCode | Discount code which customer have applied during the time of booking.
  DiscountAmount | The amount of discount code which customer have applied during the time of booking
  DiscountDescription | The description of the discount which admin have added during the time of taking cash.
  IsRecurring (boolean) | If the booking type is recurring then its true false otherwise.
  Quantity (Integer) | Quantity of the addons taken by the customer.
  AddOn  | Addon object which store the addon added by the cutomers. It is array of the addon object.
  AddOnAmount | The cost of the addon's added by the customer.
  Staff  | Staff Object which hold the information about the staff who is going to manage the appointment.
  Service | Service object which will hold the information about the service which customer is booking.
  AppointmentStatus | The AppointmentStatus object which will holds the information of status of the appointment.
  IsCancelled (boolean) | Its value is true if appointment is canceled.
  IsApproved (boolean) | Its value is true if Appointment is approved by the admin.
  IsPaid (boolean) | Its value is true if amount is paid by the customer.
  IsFailed (boolean) | Its value is true if the payment is failed during transaction.
  ResourceName | Name of the Resources which are going to use in the appointment.
 
 ## Get Appointments of user
 
 To get the appointment of particular user. This API will take the userId and returns the all appointment of the user.
 
 ### HTTP Request
 `GET /api/v1/Appointments/customers/{userId}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | userId | path | UserId of the customer whose appointment are needed | Yes | integer |
 | type | query | Type of appointment are needed. Eg. | Yes | integer |
 | offset | query |  | Yes | integer |
 | limit | query | Max no. of records needed to be fetched. | Yes | integer |
 | max_id | query | The Id of max record till that records we need. | No | integer |
 | since_id | query | From this Appointment Id we need to fetch the records.  | No | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Update an Appointment
 
 To cancel an appointment. Need to pass the appointment Id which needs to be cancel.
 
 ### HTTP Request
 `PUT /api/v1/Appointments/{id}/cancel`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path | AppointmentID which needs to be cancel. | Yes | integer |
 | mail | query | True if have to send the mail to customer. | No | boolean |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Cancel group Appointment
 
 To cancel the group of the appointment. Pass the appointment id.
 
 ### HTTP Request
 `PUT /api/v1/Appointments/{id}/cancel/group`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path | AppointmentID which needs to be cancel. | Yes | integer |
 | mail | query | True if have to send the mail to customer. | No | boolean |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Update status of the Appointment
 
 To update the status of an appointment. This will be used by the the admin to update the status of an appointment.
 
 ### HTTP Request
 `PUT /api/v1/Appointments/{id}/status/{statusId}`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path | AppointmentID whose status need to be updated | Yes | integer |
 | statusId | path | Status Id for updating the status. <br> Value are: <br> | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get an Appointments
 
 To get the list of appointment of an business at particular day.
 
 ### HTTP Request
 `GET /api/v1/Appointments`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | day | query | Date for which appointment records needs to be fetch. | Yes | dateTime |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Update an Appointment
 To update the details of an appointment. Any details apart from status and cancel will be updated by this request.
 ### HTTP Request
 `PUT /api/v1/Appointments/{id}`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path | AppointmentID which needs to be updated | Yes | integer |
 | updateAppointment | body | Object of Appointment with updated values | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Delete and Appointment
 
 To Delete an appointment needs to call this request.
 ##### ***DELETE***
 ### HTTP Request
 `DELETE /api/v1/Appointments/{id}`
 
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path | AppointmentID of the appointment which needs to be deleted | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Available Times
 
 ## Available Times Object
 To sore the Available times
 
 Attribute | Description
 --------- | ----------
 StartTime | Start Time of Available time.
 IsBlocked | True if the time is blocked.
 Quantity | Time duration from start time in mintues.
 
 ## Get Available Times
 
 To get the list of available times of the staff. When staff is available from service.
 ### HTTP Request
 `GET /api/v1/AvailableTimes`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | serviceId | query | ServiceId which staff will perform  | Yes | integer |
 | staffId | query | Id of the staff whose available time is needed | Yes | integer |
 | date | query | Date for which available time is needed | Yes | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 
 <!---------------------------------------------------------------------------------------
 -->
 # Batch
 ## Batch Object
 To process the multiple REST request in parallel. It will take multple REST request and process them and return a single response.
 
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Block Times
 ## Block Times Object
 This object will store the block time of the staff. It will store the information of time blocked by staff from diffrent sources.
 
 Attribute | Description
 --------- | ----------
 Type | Type of the block time. From where the block is made. Eg. Time is blocked from google so store the google.
 Id | Id assign to each block time object. (For internal use only)
 StaffId | Staff Id for which time is blocked.
 StartDateTime | Start Time of the block.
 EndDateTime | End time of the block. 
 Reason | Reason for which block is made. Eg. Time is block due booking is made on google.
 SourceEventId | Event ID created by the event blocker. Eg. Time is block by the google so event Id of google will be store.
 RecurringRule | If the block time recurring then what is its rule. Eg. daily, weekly, monthly etc.
 
 ## Get block times
 
 To get the block times of the businness by the date. It returns the array of block time objects.
 ### HTTP Request
 `GET /api/v1/BlockTimes`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | currentDate | query | Date for which block times are needed | Yes | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Bookings
 ## Booking Object
 This object will represents the booking information. It will store the all the details of the appointment along with the information which will be shown on the admin panel UI.
 
 Attribute | Description
 --------- | ----------
  Id  | Unique Id assign to each booking object. (For internal use only)
  OrderId  | Id of the order which include the booking.
  StaffId  | staffId who is going to manage the appointment.
  StaffName  | Name of the staff who is going to manage the appointment.
  ServiceId  | Id of the service for which customer is taking the booking.
  ServiceName  | Name of the service. Eg. Hair Cut.
  ServiceColor  | Color that is going to display in admin panel for particular service. Eg. admin set hair cut will come in red color so it will store the red.
  CustomerId  | CustomerId who is taking the booking.
  CustomerFirstName  | First name of the customer.
  CustomerLastName  | Last name of the customer.
  CustomerUserName  | Customer user name.
  CustomerProfileImage  |
  CellPhone  | Conatct no. of the customer.
  HomePhone  | Cutomer home phone number.
  WorkPhone  | Customer work phone number.
  AppoinmentStartTime  | Appointment start time for this particular booking.
  AppoinmentEndTime  | Appointment end time for this particular booking.
  BookingTime  | Time when the booking is made. Eg. If I book the appointment on today for haircut on friday. It will store the date of today.
  LastActivity    | 
  CustomForm  | Custom form Object created by the admin.
  ArivalStatus  | Current status of the booking. 
  Cost  | Cost of the whole booking.
  Quantity  | 
  DiscountCode  | Discount code applied by the user on booking.
  DiscountAmount  | Amount of discount that is user will get on this booking.
  DiscountDiscription  | Description of the discount. This will be added by admin.
  IsRecurring  | True if the booking is recurring type.
  IsRescheduled  | True if the 
  IsCancelled (boolean) | Its value is true if appointment is canceled.
  IsApproved (boolean) | Its value is true if Appointment is approved by the admin.
  IsPaid (boolean) | Its value is true if amount is paid by the customer.
  IsFailed (boolean) | Its value is true if the payment is failed during transaction.
  ResourceName | Name of the Resources which are going to use in the appointment.
 ## Get Bookings
 ### HTTP Request
 `GET /api/v1/Bookings/{id}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | offset | query |  | Yes | integer |
 | limit | query |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Business 
 ## Business Object
 This object will represents the business. It will store the all business and there appointy settings.
 
 Attribute | Description
 --------- | ----------
  Id | Unique Id assign to each business (For internal use only)
  BusinessIdText | 
  UserName | UserName of the business. It is also the sub domain name of the business. <br> Eg. If UserName of the business is demosalon then business doamin will be demosalon.appointy.com and admin can also login into appointy system using this username.
  FirstName | First name of the business owner.
  LastName | Last name of the business owner.
  Email | Email Id of the business owner.
  BusinessName | Name of the business Eg. Demo Salon
  BusinessPhone | Contact no. of the business.
  Address | Address of the business. It is complete address of the business including strret, city, state, country and zipcode.
  PackageId | Id of the business plan which is currently used by the business.
  ValidityDate | Validity of the business subscription. Eg. if the Validity of business is expiring on 21 march 2016. It will store the date of 21 march 2016.
  IsPaid | It store the true if business is using paid plan and false if business is in trial or not using paid plan.
  Istrial | It store the true if business is in trial otherwise false.
  LastPaymentStatus | It will store the date of the last susccessful payment made by the business.
  Policy | It represnts the policy Object which holds the diffrent kind of the business policies.
  ServiceAlias | 
  StaffAlias |
  ResourceAlias |
  QuantityAlias |
  WizardStep |  When first time business setups the account wizard window appear and it have 5 steps. When user save information of one window it will store that no. so that if user cancel the setup He will continie from the next window.
  IsAccountReady |
  CurrencyFormat |
  CurrencyFormatCulture |
  CurrencySymbol |
  Timezone |
  IsMilitaryTime |
  TimeSlotDurationInMintues |
  BookingLastViewed |
  CustomerLastViewed |
  ReviewLastViewed |
  CalendarStartTime |
  CalendarEndTime |
  IsQuantityAllowed |
  LogoImageURL |
  AllowInternationalClient |
 
 ## Get business details
 ### HTTP Request
 `GET /api/v1/Business`
 ##### ***GET***
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 # City
 ## City Object
 This object will represents the city. It store the name and the uniqueId assign to the city.
 
 Attribute | Description
 --------- | ----------
 id | Unique Id of city (assign only for internal use)
 name | Name of the city. Eg. Bhopal
 
 
 ## Get list of cities
 
 To get The list of the cities in particular state.
 
 This will return the array of cities in state. Eg. For madhaya Pradesh it will return array of cities object represnting the bhopal, indore, gwalior etc.
 
 ### HTTP Request
 `GET /api/v1/City`
 
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | stateId | query | Unique stateId for which list of cities are needed.<br> Eg. If we need cities of madhya pradesh we will pass stateId of madhya pradesh | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Country
 ## Country Object
 This object will represents the country. It will store the country name and unique country Id assign to each country.
 
 Attribute | Description
 --------- | ----------
 id | unique country Id (assign for internal use)
 name | Name of the country Eg. India
 
 ## Get list of countries
 To get list of all countries. 
 
 This will return array of countries object.
 
 ### HTTP Request
 `GET /api/v1/Country`
 ##### ***GET***
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Customers
 ## Customers object
 To Store the customer object info
 
 Attribute | Description
 --------- | ----------
  Id |
  FirstName |
  LastName |
  UserName |
  ProfilePicture |
  Address |
  ZipCode |
  CellPhone |
  HomePhone |
  WorkPhone |
  CityId |
  City |
  TimezoneId |
  Timezone |
  Note |
  RegistrationDate |
  Source |
  MaxRecord |
 
 ## Get customers by circle Id
 ### HTTP Request
 `GET /api/v1/Customers/circle/{circleId}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | circleId | path |  | Yes | integer |
 | offset | query |  | Yes | integer |
 | limit | query |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get customers by state
 ### HTTP Request
 `GET /api/v1/Customers/{id}/stats`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get circle Id of the customer
 ### HTTP Request
 `GET /api/v1/Customers/{id}/circle`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get notes of the customes
 ### HTTP Request
 `GET /api/v1/Customers/{id}/note`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | note | query |  | Yes | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Upload image of customers
 ### HTTP Request
 `POST /api/v1/Customers/{id}/ImageUpload`
 ##### ***POST***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get customer object
 ### HTTP Request
 `GET /api/v1/Customers/{id}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Update customer details
 ### HTTP Request
 `PUT /api/v1/Customers/{id}`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | customerModel | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 ## Delete a customer
 ### HTTP Request
 `Delete /api/v1/Customers/{id}`
 ##### ***DELETE***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 ## Get list of cutomers
 ### HTTP Request
 `GET /api/v1/Customers`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | offset | query |  | Yes | integer |
 | limit | query |  | Yes | integer |
 | max_id | query |  | No | integer |
 | since_id | query |  | No | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Add new customer
 ### HTTP Request
 `POST /api/v1/Customers` 
 ##### ***POST***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | customerModel | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 
 # Intake form
 ## Intake form Object
 To store the intake form object
 
 Attribute | Description
 --------- | ----------
 Name |
 Type |
 IsRequired |
 ServiceIds |
 Options |
 
 ## Get list of Custom forms
 ### HTTP Request
 `GET /api/v1/CustomForm`
 ##### ***GET***
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 # Location
 ## Location object
 To store location object
 
 Attribute | Description
 --------- | ----------
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Paymentmodes
 ## Paymentmodes Object
 To store paymentmodes object info
 
 Attribute | Description
 --------- | ----------
 Id |
 Name |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Orders
 ## Orders object
 
 Attribute | Description
 --------- | ----------
 OrderId |
 Discount |
 AddOn |
 AddOnAmount |
 Note |
 Appointments |
 CustomerId |
 Customer |
 
 ## Cancel an order
 ### HTTP Request
 `PUT /api/v1/Orders/{id}/cancel`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | mail | query |  | No | boolean |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Confirm an order
 ### HTTP Request
 `PUT /api/v1/Orders/{id}/approve`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Update Payment of order
 ### HTTP Request
 `PUT /api/v1/Orders/{id}/Payment`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | payments | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Add new Order
 ### HTTP Request
 `POST /api/v1/Orders`
 ##### ***POST***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | insertOrder | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get order by id
 ### HTTP Request
 `GET /api/v1/Orders/{id}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | expand | query |  | No | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Delete order by id
 ### HTTP Request
 `DELETE /api/v1/Orders/{id}`
 ##### ***DELETE***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Modify the details of the order by id
 ### HTTP Request
 `PATCH /api/v1/Orders/{id}`
 ##### ***PATCH***
 
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | json | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## GET Payment mode
 ### HTTP Request
 `GET /api/v1/PaymentMode`
 ##### ***GET***
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Packages
 ## Packages Object
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Resources
 ## Resources Object
 Attribute | Description
 --------- | ----------
 Id |
 Name |
 ServiceIds |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Reviews
 ## Reviews Object
 
 Attribute | Description
 --------- | ----------
   Id |
   customerId |
   Customer |
   AppointmentID |
   Rating |
   Comment |
   ReviewDate |
   Reply |
   IsPromotedFacebook |
 
 ## Reply to particular review
 ### HTTP Request  
 `PATCH /api/v1/Reviews/{id}/reply`
 ##### ***PATCH***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | json | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get list of Reviews
 ### HTTP Request  
 `GET /api/v1/Reviews`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | offset | query |  | Yes | integer |
 | limit | query |  | Yes | integer |
 | max_id | query |  | No | integer |
 | since_id | query |  | No | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get a single review
 ### HTTP Request  
 `GET /api/v1/Reviews/{id}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Services
 ## Services Object
 
 Attribute | Description
 --------- | ----------
     Id |        
     Title |
     Description |
     DurationInMinutes |
     Price |
     Capacity |
     Priority |
     Color |
     Category |
 
 ## Search a service
 ### HTTP Request  
 `GET /api/v1/Services/search`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | name | query |  | Yes | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get service of staff
 ### HTTP Request  
 `GET /api/v1/Services/{id}/Staff`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get list of services
 ### HTTP Request  
 `GET /api/v1/Services`
 ##### ***GET***
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Add new services
 ### HTTP Request  
 `POST /api/v1/Services`
 ##### ***POST***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | serviceModel | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 ## Get a single service
 ### HTTP Request  
 `GET /api/v1/Services/{id}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Update a service
 ### HTTP Request  
 `PUT /api/v1/Services/{id}`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | serviceModel | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 ## Delete a service
 ### HTTP Request  
 `DELETE /api/v1/Services/{id}`
 ##### ***DELETE***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 #Staff
 ## Staff Object
 
 Attribute | Description
 --------- | ----------
    Id |
    Name |
    Email |
    Description |
    Mobile |
    ProfilePicture |
 
 ## Seacrh staff in business
 ### HTTP Request  
 `GET /api/v1/Staff/search`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | name | query |  | Yes | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Get list of staff
 ### HTTP Request 
 `GET /api/v1/Staff`
 
 ##### ***GET***
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Add a new staff
 ### HTTP Request 
 `POST /api/v1/Staff`
 ##### ***POST***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | staffModel | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 ## Get a single staff
 ### HTTP Request  
 `GET /api/v1/Staff/{id}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 ## Update a staff details
 ### HTTP Request  
 `PUT /api/v1/Staff/{id}`
 ##### ***PUT***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 | staffModel | body |  | Yes |  |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 ## Delete a staff 
 ### HTTP Request  
 `DELETE /api/v1/Staff/{id}`
 ##### ***DELETE***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | id | path |  | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 204 | No Content |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # States
 ## The states Object
 
 This object represents the states. Each state has a unique stateId for internal use. 
 
 During the creation of form To display the list of state in particular country.
 
 Attribute | Description
 --------- | ----------
 id (int) | Unique stateId for internal use
 name (String) | Name of the state Eg. Madhya Pradesh.
 
 ## List of states
 
 To get the list of states in particular country. 
 
 This will return the array of states objects.
 
 Eg. To get the list of all states in India pass countryId of india in this request.
 
 ### HTTP Request  
 `GET /api/v1/State`
 ##### ***GET***
 **Parameters**
 
 | Name | Type | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | countryId | query Parameter | countryId for which states are needed | Yes | integer |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # Taxes
 ## Taxes Object
 
 <!---------------------------------------------------------------------------------------
 -->
 #Timezones
 
 ## The Timezones Object
 This object represents the timezone information of the particular region. 
 
 Attribute | Description
 --------- | ----------
 TimezoneId (int) | Unique Timezone Id assign to diffrent regions 
 Description (String) | Name of the area, location Eg, Chennai, Kolkata, Mumbai, New Delhi
 TimezoneOffset (int) | Store the the time offset value. Eg. for +5:30 timezone offset it will store the 
 WindowsTimeZoneId (String) | Microsoft have assigned a timezone Id to each region. This field will store the timezone Id assign by the microsoft. For further reference <a href="https://msdn.microsoft.com/en-us/library/gg154758.aspx">here</a>
 
 
 
 ## Get list of Timezones
 
 To get the list of timezones. 
 
 This API will return array of timezones object.
 
 ### HTTP Request  
 `GET /api/v1/Timezones`
 ##### ***GET***
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 
 # User Gift Certificate
 ## Get user gift Certificate
 ### HTTP Request  
 `GET /api/v1/UserGiftCertificate/CheckBalance/{code}`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | code | path |  | Yes | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |
 
 <!---------------------------------------------------------------------------------------
 -->
 # Work Schedule
 ## Get WorkSchedules of business
 ### HTTP Request  
 `GET /api/v1/WorkSchedules`
 ##### ***GET***
 **Parameters**
 
 | Name | Located in | Description | Required | Type |
 | --- | --------- | ---------- | ------- | --- |
 | currentDate | query |  | Yes | string |
 
 **Responses**
 
 | Code | Description |
 | --- | ---------- |
 | 200 | OK |