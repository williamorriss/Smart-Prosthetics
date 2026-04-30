# Smart-Prosthetics Application

## Developer instructions
To install the necessary dependancies:

npm install

Runt the development server from the terminal:

npx expo start

This will prompt the user with a QR code to use the app in Android through the Expo Go App or directly in ios by pressing
w and the web application through w.


## Temporary documentation

### Setting up the application through expo
Run the following:

npx create-expo-app@latest app 

cd app

npm run reset-project     (to delete any pre-existing files not needed)

### Approach followed
The approach we will follow is React Native through the Expo framework for the following reasons:
1) built-in APIs for common connections like sensors through the Expo SDK 
2) support for OTA updates

3) Expo CLI

4) Expo Go App

5) Expo Application Services for automating updates in Google Play / App Store)

The app lives on the phone itself of the user (as an .apk or .ipa file for Android and IoS respectively) and it connects with the ESP-32 through a BLE (Bluetooth Low Energy) Server because it allows for lower energy consumption (considering the amount of data transmitted through BLE is not prohibitive).

Trough LittleFS we only store data for OTA updates and current configuration settings for the armband, solving the isssue of having to upload front-end files to the ESP-32 (which would be impossible because of build-upload workflow and size limitations)

### Suggested initial design of the application
The pages will be split to have only one or two features per page to allow for easier control of the sliders due to the small size of mobile devices. Also, it would be useful to have two sliders/controls for each feature one for larger values and one that allows for greater precision, again to facilitate the user.​

There should be the following pages:​
1. Page to connect to a new device with a button         redirecting you to a page to scan a QR code​

2. Page to select a WiFi network to connect with​

3. Checking proper provisioning page (this could be deleted)​

After successfully connecting to a device and a computer network, the user should be redirected to a home page, where he is able to view the details of the device and change it as well as change the router he is connected to.​
On the top left corner there is a menu icon allowing the user to redirect to the pages used for inputting the settings of the device (ie initial grip, stable grip and max grip etc). There should be one page for initial grip, one for stable grip and one for max grip, release state and hysteresis buffer. What is important is that the user fully understands what each section does, so there should be some information on the page of the particular feature or the names should be simplified (we could also include a general user manual page).

As can be seen in the picture below:
1. The user is able to select the waveform for which they want to change the settings through a drop down.​

2. There are two sliders or cyclic sliders to control the whole and the decimal value of the value we are changing (for example integer and decimal value of max grip)​.

3. There should also be a submit button so that the user does not accidentally change the settings without wanting to do so, as well as a notification when the user presses submit on whether the change was successful​.

4. The menu icon should remain in the top left container, just like in the home page for consistency.