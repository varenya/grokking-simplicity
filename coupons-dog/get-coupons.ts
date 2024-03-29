import {Coupon, Email, User} from "./model";

type Rank = Coupon["rank"];

const coupons: Coupon[] = [
    {code: "MAYDISCOUNT", rank: "good"},
    {code: "10PERCENT", rank: "bad"},
    {code: "PROMOTION45", rank: "best"},
    {code: "IHEARTYOU", rank: "bad"},
    {code: "GETADEAL", rank: "best"},
    {code: "ILIKEDISCOUNTS", rank: "good"},
];

const users: User[] = [
    {email: "john@coldemail.com", rec_count: 2},
    {email: "sam@pmail.co", rec_count: 16},
    {email: "linda1989@oal.com", rec_count: 1},
    {email: "jan1940@ahoy.com", rec_count: 0},
    {email: "mrbig@pmail.co", rec_count: 20},
    {email: "lol@lol.lol", rec_count: 0},
];

function getUserRank(user: User) {
    return user.rec_count >= 10 ? "best" : "good";
}

function getCouponsByRank(coupons: Coupon[], rank: Rank) {
    return coupons
        .filter((coupon) => coupon.rank === rank)
        .map((coupon) => coupon.code);
}

function getEmail(coupons: Coupon[], user: User): Email {
    const rank = getUserRank(user);
    const applicableCoupons = getCouponsByRank(coupons, rank);
    switch (rank) {
        case "best":
            return {
                to: user.email,
                from: "some@email.com",
                subject: "Your weekly coupons",
                body: `The best coupons : ${applicableCoupons.join(", ")}`,
            };
        case "good":
            return {
                to: user.email,
                from: "some@email.com",
                subject: "Your weekly coupon",
                body: `The good coupons : ${applicableCoupons.join(", ")}`,
            };
        default: {
            const _defaultCase: never = rank;
            return _defaultCase
        }
    }
}

const emails = users.map((user) => getEmail(coupons, user));

console.log({emails});
