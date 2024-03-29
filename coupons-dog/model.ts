type User = {
	email: string;
	rec_count: number;
};

type Coupon = {
	code: string;
	rank: "good" | "bad" | "best";
};

type Email = {
	to: string;
	from: string;
	body: string;
	subject: string;
};

export { User, Coupon, Email };
