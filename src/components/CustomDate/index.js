const CustomDate = () => {
    const today = new Date();
    const week = ['일', '월', '화', '수', '목', '금', '토'];

    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = week[today.getDay()];

    let hours = today.getHours();
    const minutes = today.getMinutes();
    const ampm = hours >= 12 ? '오후' : '오전';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedDate = `${month}월 ${date}일 (${day}) ${ampm} ${hours}:${formattedMinutes}`;


    return (
        <>
            <div>
                {formattedDate}
            </div>
        </>
    )
}

export default CustomDate;