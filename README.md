# myo-node

## build and run
- `$ yarn install`
- `$ node sendOSC.js`

## recieve OSC
OSC data path
- /emg
  - array of EMG value (length 8)
- /imu
  - /orientation
     - array of orientation value
     - `[x,y,z]`
  - /gyroscope
     - array of gyroscope value
     - `[x,y,z]`
  - /accelerometer
     - array of accelerometer value
     - `[x,y,z]`
- /pose
  - string of pose-name
