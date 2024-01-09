# McDonalds KVS Simulator

Welcome to Mcdonalds KVS Simulator! This project is made due to my poor performance being an initiator within a few months of starting a part time job at Mcdonalds. To somewhat simulate what it would be like during a rush hour, this program is configured to keep pumping in orders no matter what. Unfortunately, i am unable to create a minigame like the one they give during training. But with imagination, this simple simulator should be more than enough to simulate and remember the recipes.

This program is currently configured for the McDonalds Japan menu. If you would like to change it, see 'Configuration' below.

  

## WARNING

THIS PROJECT IS EXPRESSLY INDEPENDENT AND HAS NO AFFILIATION, ASSOCIATION, OR ENDORSEMENT BY MCDONALD'S CORPORATION OR ANY OF ITS SUBSIDIARIES. MCDONALD'S IS NOT RESPONSIBLE FOR, AND DOES NOT ENDORSE OR SUPPORT, THIS PROJECT OR ITS CONTENTS.

  

## Configuration

All available configurations can be done inside './lib/generateorder.js'.
|Parameter|Explanation|Type|Default Value|
|--|--|--|--|
|maxOrderLength|Maximum amount of items a single order could have|Int|5|
|mixOrderLength|Minimum amount of items a single order could have|Int|1|
|singleItemMaxMount|Maximum amount of a single item could have in an order|Int|4|
|singleItemMinAmount|Minimum amount of a single item could have in an order|Int|1|
|Itemlist|List of items that can be put in queue|Array (String)|Mcdonalds Japan menu|
|OrderTypes|Type of order (Only for display)|Array (String)|Drive Through, Bag, Tray, Delivery|
|OrderStorage|Current order state (Only for display|Array (String)|Paid, Stored|

  
  

## Shortcuts

List of available shortcuts to use within program

### `enter`

Serves the order. Depending on if the side is on or off, when you press enter, an order will be served while another will be added to the queue.

### `p`

Toggles side on or off.

### `o`

Pushes a new order to the queue. Depending on if the side is on or off, when you press 'o', an order will not be pushed in to the queue.

  

## Available Scripts

  

In the project directory, you can run:

  

### `npm start`

  

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  

The page will reload when you make changes.\

You may also see any lint errors in the console.

  

### `npm run build`

  

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

  

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!