import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

import { UserType } from "@/types/user";

const { persistAtom } = recoilPersist();

interface UserStateType extends UserType {
	password: string;
}

export const userState = atom<UserStateType>({
	key: "userState",
	default: {
		email: "",
		kidsName: "",
		kindergarden: "",
		password: "",
	},
	effects_UNSTABLE: [persistAtom],
});
