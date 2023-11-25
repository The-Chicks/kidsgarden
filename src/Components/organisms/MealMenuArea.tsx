import { MealCardType } from "@/types/card";

import MealCard from "../Molecules/MealCard/MealCard";

const mealList: MealCardType[] = [
	{
		type: "MORNING_SNACK",
		menu: "흑미밥, 된장찌개, 너비아니, 호박 새우 볶음, 딸기,흑미밥, 된장찌개, 너비아니, 호박 새우 볶음, 딸기,흑미밥, 된장찌개, 너비아니, 호박 새우 볶음, 딸기",
		imageList: [
			"https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2018/11/shutterstock_1068672764.jpg",
			"https://www.shutterstock.com/ko/blog/wp-content/uploads/sites/17/2018/11/shutterstock_1068672764.jpg",
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
		],
	},
	{
		type: "LUNCH",
		menu: "흑미밥, 된장찌개, 너비아니, 호박 새우 볶음, 딸기",
		imageList: [
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
		],
	},
	{
		type: "AFTERNOON_SNACK",
		menu: "흑미밥, 된장찌개, 너비아니, 호박 새우 볶음, 딸기",
		imageList: [
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
			"https://img.daily.co.kr/@files/www.daily.co.kr/content/food/2020/20200730/40d0fb3794229958bdd1e36520a4440f.jpg",
		],
	},
];

const MealMenuArea = () => {
	return (
		<>
			{mealList.map(({ type, menu, imageList }) => (
				<MealCard key={type} type={type} menu={menu} imageList={imageList} />
			))}
		</>
	);
};

export default MealMenuArea;
