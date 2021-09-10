import fetch from "node-fetch";

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

export function getCount() {
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
      "x-csrf-token":
        "w8nC6O0ndYKpzNLhKr+vymcHr2GxgRNVmfPielpUj9dpU0fxNsvt7lNga7u53gq5wYD8WTasP14LaYAnp7WgiA==",
      "x-entry-token": "BJgVaEVx",
      "x-gd-ssf": "MTYzMTI1NzEzMA==--8dbb3df65dcc6cd20faf0f074681e91e79a3c8c6",
      "x-jsj-cps":
        "eyJfcmFpbHMiOnsibWVzc2FnZSI6Ild5SkNTbWRXWVVWV2VDSmQiLCJleHAiOiIyMDIxLTEwLTEwVDA2OjU4OjUwLjk2NFoiLCJwdXIiOm51bGx9fQ==--3b94e0a7f73474ba0cfef89084ef281111c7f065",
      cookie:
        "filled_form_scene=vote; jsj_uid=859981a2-6804-43e9-98ed-033ca73444dd; last_fill_entry_token=BJgVaEVx; referer_url=https%3A%2F%2Fjinshuju.net%2Ff%2FvX981G%3Fcode%3D071Pj3nl2CGLG74ttiol2bISLZ1Pj3nw; _ga=GA1.2.1410205248.1631257131; _gid=GA1.2.1469056539.1631257131; Hm_lvt_47cd03e974df6869353431fe4f4d6b2f=1631256633; _gat_gtag_UA_48208031_8=1; weixin_followers_subscribed=; start_filling_time_vX981G=1631257337; csrf_token=w8nC6O0ndYKpzNLhKr+vymcHr2GxgRNVmfPielpUj9dpU0fxNsvt7lNga7u53gq5wYD8WTasP14LaYAnp7WgiA==; Hm_lpvt_47cd03e974df6869353431fe4f4d6b2f=1631257338; _gd_session=cU82bmFkSFN4YjJCRWFjTFdPQk9DejNPcXVoSVduWjM4NGtCUUZaM05xdE52cTZiV2NONlFZWFViOWhTaU1HL1FrRW5rSlNzMDFTcFdvMG1tRmJNa3FvZ1p3Qm9MeXV4bWRnSlRFc0tSVHFTS1pqSGZtQkxkMWZ4VWF3Tk9LMy9tTEtpQ0V3RmJMYzQvQ1BJUUFHTmR3PT0tLXVyeFdOc1JDazF1QU9XZ1Q5V1RZOUE9PQ%3D%3D--148501a4c76f52aa7afb85779136ba2625e8b4c2",
    },
    referrer:
      "https://jinshuju.net/f/vX981G?code=071Pj3nl2CGLG74ttiol2bISLZ1Pj3nw",
    referrerPolicy: "strict-origin-when-cross-origin",
    body: '[{"operationName":"publishedDynamicAttrs","variables":{"formId":"vX981G","code":"071Pj3nl2CGLG74ttiol2bISLZ1Pj3nw"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"5611e27d50ccd4a83cbb3f4db1fe051b944f7a58a7b4b997f66a9d78e56f982b"}}},{"operationName":"ShowFeature","variables":{"forBillingAccountOwner":false,"key":"should_show_fixed_shopping_cart"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"bd4956e236b4ffddba59001333d726b738df371ae3c177ea897d85ecd1d190dd"}}},{"operationName":"ShowFeature","variables":{"forBillingAccountOwner":true,"key":"payable_reservation","formToken":"vX981G"},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"bd4956e236b4ffddba59001333d726b738df371ae3c177ea897d85ecd1d190dd"}}},{"operationName":"GeeTestCaptcha","variables":{"type":"other","options":{"timestamp":"1631257338460_vQER0"}},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"fba48d68e1ba943cacaf49c6ae77983e78fa88663ab39e3d6fbfd8c574e58dca"}}}]',
    method: "POST",
    mode: "cors",
  });
  const data = response.json();

  data.then((list) => {
    const result = list[0].data;
    const count =
      result.publishedFormDynamicAttrs.entryCountsPerChoice.field_5.tJRr;
    console.log("count: ", count);
  });
}
