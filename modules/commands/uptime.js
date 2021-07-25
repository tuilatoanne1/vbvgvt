module.exports.config = {
        name: "uptime",
        version: "1.0.0",
        hasPermssion: 0,
        credits: "VanHung",
        description: "Kiểm tra thời gian bot đã online",
        commandCategory: "System",
        usages: "uptime",
        cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
        const axios = require('axios');
let time = process.uptime();
        const request = require('request');
const fs = require("fs");

        let hours = Math.floor(time / (60 * 60));
        let minutes = Math.floor((time % (60 * 60)) / 60);
        let seconds = Math.floor(time % 60);
        axios.get('https://video.xx.fbcdn.net/v/t42.3356-2/221588684_4472747609444338_5794791407288672525_n.mp4/video-1627208195.mp4?_nc_cat=110&ccb=1-3&_nc_sid=060d78&_nc_ohc=72D8LSIM9U0AX-1qdh0&vabr=907532&_nc_ht=video.xx&oh=343b60ce44195b17010d102ad9a11ec4&oe=60FE3A39&dl=1').then(res => {
        let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
        var callback = () =>
                                api.sendMessage(
                                        {
                                                body: `Bot của Toàn đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây.`,
                                                attachment: fs.createReadStream(__dirname + `/cache/hii.mp4.${ext}`)
                                        },
                                        event.threadID,
                                        () => fs.unlinkSync(__dirname + `/cache/hii.mp4.${ext}`),
                                        event.messageID
                                );
                 return request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/hii.mp4.${ext}`)).on("close", callback);
});
}
