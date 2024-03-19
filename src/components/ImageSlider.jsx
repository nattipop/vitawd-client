import { useEffect } from "react";

const ImageSlider = ({ logos }) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
    script.async = true;

    document.body.appendChild(script);
  }, [])
  return (
    <div id="img-slider-div">
      <div className="pa-carousel-widget" style={{width:"auto", minWidth:"500px", height:"500px", display:"none"}}
        data-link="https://photos.app.goo.gl/ZhpwG8iPzkJuBqs98"
        data-title="Logos"
        data-delay="3"
        data-description="8 new items added to shared album">
        <object data="https://lh3.googleusercontent.com/pw/AP1GczP6J9s0Qb3ip58255H-acRDBhKHlLgtiWd7uUYWz68mfGDw3S_93u08BCiszlwiHM7VrDAJsjBJFFI4iqvKBL3WbS5n_uABt1gQjhZQO_ji2TDCqiM=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczNlYoocdencxx6N3JRdRV_rzD8eJRAXyEPg-0e7Q_kv2z9103o3uM9iwHTViQ7fmnrRmDKxmOHqkoGcBlNHRZn5npP0zicZ_v9VC1Y96a1b8WC-9mM=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczNk67W6UQFUKLqGRP1mNDuS-0v73ohfi2tj0zeOhhSvQdEKasgI_LnFKdTgNfYXHv3OGMiTCeNnOIBkgzdEl5eOrmmooRic1VWv4VXWo8FzEn3KYn8=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczNJvsx1mXlwoHbb5F1eAVrTeU0U5W0aYQzEXGn1eBqv7mOHB5-C6tUH24CMckHODZFm4DqxKiWZ3HZR5tFEANlZA8mOlsB2U48gOVj-APIv6oGfddI=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczM3vspTAPBl4zDVVKDzC-V3Vn8EDgMr_psNdX1ZKR0Wq665jSgddhSBFSp_es4V9Hm871Rw6nNhNQig9E6FrLyCnBuVHJNcepiP1ZcQnvGbOBSMGU8=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczORd_78tx0H7VB8_tiDfcDQG7JeLhuaKY1tqUqTpvEwtlZgExM1J_VWxacx53HDwPslYFLio0LhY6PZLS-h7YfB6IAWrM1fOLpTixgHGOIE_VOcdpY=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczOc5nrY7DIpTta0PbAIQnMzreD6Nw6ayt8JxF8JnRz-joRynuRsi81oNjVccwn55h2l_JXeVusEKosdErRvehC4T8t3vHir7J07wT8qacuzh6WIFcg=w1920-h1080"></object>
        <object data="https://lh3.googleusercontent.com/pw/AP1GczNQMjLY9a_rHP0HdJZuhGajKdhgqDlq2YGWqmL_GYHZb0Sy2d4B-hkS6PRfMSaFMjBcmvS52Q0bbr2lsnmA7tWeja68Jfcc3-oLaoPAGjMCQKHVN4g=w1920-h1080"></object>
      </div>
    </div>
  )
}

export default ImageSlider;