import React from 'react'

const ImageComponent = ({ imageUrl }) => {
    return (
        <div style={{
            width: 50,
            height: 50,
            borderRadius: 24,
            background: `url(${imageUrl}) lightgray 50% / cover no-repeat, #C4C4C4`,
        }}>
            {/* <img src="https://s3-alpha-sig.figma.com/img/1986/2999/e64eaaa6467b6dfacf82e6b3e1f74c88?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWznRVKvnSJjVAdanazkvPiUC7qf8GNIsO3njA1fywLpjJx0OQVZZyczYtWVgF8Y4q1cx-kRKA3K-cNu-AaEwJeDJbguSgdK8CdARdXtcnvXBVyrNhdeZM-HIMaLVtlFcbuQ0o-yjraus2rwMThwh4e6aQkJLHZw7ryDWr1uxCXITVM9uWuG0ZdgBBnRQgdw1PpIR380kyYc486L~ZkiI9~uPHsn-C6TYn1~hHWN3I3ToJzyfg8v8JsJWIax0RCJXLoAuQt-eHID8CEZjkMeHK9U1MiBIAjqc01SU8JdSl1o6dsR0zWJFMwsTeYEQf0WCiwcG~U9MQ~nnj41jC-9Gg__" alt="an image" /> */}
        </div>
    )
}

export default ImageComponent