# Mobile Development Challenge

The Challenge is to create a Responsive React Native application consuming a given API.

# Getting Started

1. Fork this [repository].
1. Clone the fork to your local machine.
1. To run application:
   ```bash
   npm start
   ```
   Expo was used for the project, so you may be able to test the application through Android device / emulator, iOS simulator, or using your personal device with Expo Go with the QR code

# About Project

- The application uses FlatList to display the entries from the API. FlatList is used because it renders items lazily when they are about to apprear. This saves on memory and processing time, especially with APIs that have huge amounts of data.
- Pagination was also incorporated into the application.
- For the API, it is broken down to only display 100 enteries per page for a smaller payload.
