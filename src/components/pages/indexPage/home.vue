<template>
  <div>
    <input
      class="input-file"
      name="file"
      type="file"
      accept="image/png, image/gif, image/jpeg"
      @change="upload"
    />
  </div>
</template>
<script>
import OSS from "ali-oss";
import axios from "axios"
export default {
  name: "upload",
  data() {
    return {
      loading: false
    };
  },
  created() {
    this.obj = JSON.parse(this.sendRequest()).data;
  },
  methods: {
    upload(e) { 
      console.log(e.target.files[0]);
      // 先准备好 oss 服务器需要的内容
      const photo = e.target.files[0]  // 获取图片对象
        const photoName = photo.name  // 原图片的名称
      const key = this.obj["dir"] + this.obj["fileName"]; // 存储到oss的图片名称 自己定，必须确保唯一性，不然会覆盖oss中原有的文件
      const policy = this.obj["policy"]; // 服务器端同事调oss的API，通过接口返回给前端的 policy
      const OSSAccessKeyId = this.obj["accessId"]; // 服务器端同事调oss的API，通过接口返回给前端的 OSSAccessKeyId
      const callback = this.obj["callback"]; // 服务器端同事调oss的API，通过接口返回给前端的 callback。这个是需要 oss 触发这个回调来通知服务器操作结果。
      const signature = this.obj["signature"]; // 服务器端同事调oss的API，通过接口返回给前端的 signature。这个就是签名，最关键的。
      const url = `https://nanning-meilijin-test.oss-cn-shenzhen.aliyuncs.com/`;

      // biu一下，提交给oss
      let param = new FormData();
      param.append("name", `${photoName}`);
      param.append("key", `${key}`);
      param.append("policy", `${policy}`);
      param.append("OSSAccessKeyId", `${OSSAccessKeyId}`);
      param.append("success_action_status", 200); // 不要问为什么，照做
      param.append("callback", `${callback}`);
      param.append("signature", `${signature}`);
      param.append("file", photo, photoName); // 这个**切记**一定要放到最后去 append ，不然阿里云会一直报 key 的错误
      axios
        .post(url, param)
        .then(response => {
          console.log("response == ", response);
        })
        .catch(err => {
          console.log("err == ", err);
        });
    },
    sendRequest() {
      var xmlhttp = null;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
      }

      if (xmlhttp != null) {
        // serverUrl是 用户获取 '签名和Policy' 等信息的应用服务器的URL，请将下面的IP和Port配置为您自己的真实信息。
        this.serverUrl =
          "http://tool.jqtianxia.net:9011/file/signature?fileType=idcard_back&fileNumber=1&suffix=jpg&clientno=1&filetype=2";

        xmlhttp.open("GET", this.serverUrl, false);
        xmlhttp.setRequestHeader(
          "X-Auth-Token",
          "6c294b77-35ff-4774-9209-484e68a4614e"
        );
        xmlhttp.send(null);
        return xmlhttp.responseText;
      } else {
        alert("Your browser does not support XMLHTTP.");
      }
    },
    toUpload() {
      let _this = this;
      _this.loading = true;
      var client = new OSS({
        key: this.obj["dir"] + this.obj["fileName"],
        policy: this.obj["policy"],
        accessKeyId: this.obj["accessId"],
        accessKeySecret: this.obj["accessId"],
        success_action_status: "200", //让服务端返回200,不然，默认会返回204
        callback: this.obj["callback"],
        signature: this.obj["signature"],
        name: this.obj["fileName"],
        expire: parseInt(this.obj["expire"]),
        host: this.obj["host"]
      });
      //获取文件信息
      const files = document.getElementById("uploadImage");
      if (files.files) {
        const fileLen = document.getElementById("uploadImage").files;
        const file = document.getElementById("uploadImage").files[0];
        let consat = file.name;
        let name = fileLen[0].name;
        for (let i = 0; i < fileLen.length; i++) {
          const file = fileLen[i];
          client
            .multipartUpload(name, file)
            .then(function(res) {
              _this.loading = false;
              var str = res.res.requestUrls[0];
              console.log(str.split("?")[0]);
              _this.$emit("childByValue", str.split("?")[0]);
            })
            .catch(err => {
              console.log(err);
            });
        }
      }
    }
  }
};
</script>
<style  scoped>
.wrap {
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
