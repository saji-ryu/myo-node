const Myo = require("myo");
const osc = require("node-osc");

const oscClient = new osc.Client("127.0.0.1", 8931);
Myo.connect(
  "com.stolksdorf.myAwesomeApp",
  require("ws")
);
Myo.on("connected", function() {
  console.log("connected!", this.id);
  this.streamEMG(true);
});

Myo.on("emg", data => {
  console.log("emg:" + data);
  oscClient.send("/emg", data);
});

Myo.on("imu", data => {
  console.log(data);
  // OSCではObject遅れないみたいなので配列に変える
  oscClient.send("/imu/orientation", [
    data.orientation.x,
    data.orientation.y,
    data.orientation.z,
  ]);
  oscClient.send("/imu/gyroscope", [
    data.gyroscope.x,
    data.gyroscope.y,
    data.gyroscope.z,
  ]);
  oscClient.send("/imu/accelerometer", [
    data.accelerometer.x,
    data.accelerometer.y,
    data.accelerometer.z,
  ]);
});

Myo.on("pose", pose_name => {
  console.log(pose_name);
  oscClient.send("/pose", pose_name);
});
