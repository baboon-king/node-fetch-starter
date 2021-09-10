import fetch from "node-fetch";
import { randomPhone } from "./generate_random_phone";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

export function startVote() {
  const phone = randomPhone();
  const response = await fetch("https://jinshuju.net/graphql/f/vX981G", {
    headers: {
      accept: "*/*",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "content-type": "application/json;charset=UTF-8",
      "sec-ch-ua":
        '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      cookie: "filled_form_scene=vote",
    },
    referrer:
      "https://jinshuju.net/f/vX981G?code=071Pj3nl2CGLG74ttiol2bISLZ1Pj3nw",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: `{"operationName":"CreatePublishedFormEntry","variables":{"input":{"formId":"vX981G","entryAttributes":{"field_5":["tJRr"],"field_7":"${phone}"},"captchaData":null,"weixinAccessToken":null,"xFieldWeixinOpenid":null,"weixinInfo":null,"prefilledParams":"","embedded":false,"internal":false,"backgroundImage":false,"formMargin":false,"hasPreferential":false,"fillingDuration":27.092,"forceSubmit":false,"geetestData":{"type":"other","challenge":"b733c40611e8e08fd6eab8d1b38185e8k1","seccode":"cce7676e7714491eb1862167ad0e0ff4|jordan","validate":"cce7676e7714491eb1862167ad0e0ff4"}}},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"efc2acc4016c37a69da13ffda3d86f5d44d71748f01fc53844ce0f1a3c03d489"}}}`,
    method: "POST",
    mode: "cors",
  });
  const data = response.json();
  data.then((list) => {
    debugger;
  });
}
