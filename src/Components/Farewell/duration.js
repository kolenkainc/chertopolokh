const finishDate = new Date("2020-02-28T23:59:59")

export function duration() {
    return calculateDuration(new Date());
}

export function calculateDuration(current) {
    const diffTime = Math.abs(current - finishDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays < 365 / 2) {
        return "закончилось полгода назад";
    } else if (diffDays > 365 / 2 && diffDays < 365) {
        return "закончилось год назад";
    } else if (diffDays > 365 && diffDays < 365 * 1.5) {
        return "закончилось полтора года назад";
    } else if (diffDays > 1.5 * 365 && diffDays < 2 * 365) {
        return "закончилось два года назад";
    }else {
        return "закончилось больше двух лет назад";
    }
}
