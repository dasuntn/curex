# Project Name - curEx

curEx is a mobile app that converts the amount given in Sweden Krona to any desired currency.


## Prerequisites

	* Node version 16.6.1 or higher
	* Git
	* Watchman (for macOS users)



## Installation


* Installing Expo CLI by running bellow command in terminal.

	```
	npm install --global expo-cli

	```

* Verify that the installation was successful by running below command in the terminal.
  You will see "Not logged in" message.

	```
	expo whoami

	```

* You can create an account by running `expo register` if you like, or if you have one already run `expo login`, but an account is not mandatory.


* Download the Expo Go app from  iOS or Android.

	* Expo Go allows you to open up apps that are being served through Expo CLI.

	* IOS download link -> https://itunes.com/apps/exponent

	* Android download link -> https://play.google.com/store/apps/details?id=host.exp.exponent


* When the Expo Go app is finished installing, open it up. If you created an account with expo-cli then you can sign in from the "Profile" tab.


* Download and unzip the project folder which was attached with the email to a convenient location.


* Open a terminal and go to the project root folder where the `package.json` file is located.


*  Run the following command to get all the required dependencies for the project.

	```
	npm install
	
	```


* After successfully downloading the required dependencies, execute the following command to run the development server which will open Expo Dev Tools on browser, a graphical interface for Expo CLI.

	```
	expo start

	```


* Scanning the QR code from the Expo Dev Tools will open the application.

	  Note : Make sure that you are on the same WiFi network on your computer and the device you're going to use.

	* IOS -> Open the default Apple "Camera" app and scan the QR code you see in the terminal or in Expo Dev Tools.

	* Android -> press "Scan QR Code" on the "Projects" tab of the Expo Go app and scan the QR code you see in the terminal or in Expo Dev Tools.


* If you already have a setup simulator(IOS/Android) you can use the below options to run it on a simulator.

	* Pressing `i` will open in an iOS simulator (Following URL give instructions for setting up ios simulator -> https://docs.expo.dev/workflow/ios-simulator/). 

	* Pressing `a` will open in an Android emulator or connected device (Following URL give instructions for setting up android emulator -> https://docs.expo.dev/workflow/android-studio-emulator/)



## How to use the app ?


Note: Screen recorded video link -> https://drive.google.com/file/d/1StlPYS_2kxRKXk0rEVG8-LUl5F-ZZRV9/view?usp=sharing


* Search for the country whose currency conversion you wish to see, by typing the country name in the search bar.

* Select the country card, that will navigate you to the currency conversion screen.

* Add the amount to be converted, in Swedish Krona.

* Conversion for the selected country will be displayed below.

* If there are multiple currencies, select the desired currency from the currency dropdown on the bottom right of the card.


## Project Structure

	src/
	├─ apis	  					API related files.
	├─ assets   					Images and styles related modules.
	├─ asyncStorage					Store and retrieve functions for async-storage related files.
	├─ helpers					Common utility functions related to files.
	├─ navigation					React navigation 5 related files.
	├─ typing/					Common types.
	├─ pages
	       ├─ components    			Common render components.
               ├─ {pageName}    			Specific screen related files.
	                   ├─PageName.tsx		Screen render component.
			   		   ├─PageName.logic.ts		Screen related logics.
	                   ├─PageName.styles.ts         Screen related styles.
	
