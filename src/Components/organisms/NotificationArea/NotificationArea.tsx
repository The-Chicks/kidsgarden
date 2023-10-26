import NotificationItem from "@/components/molecules/NotificationItem/NotificationItem";

import { ContainerSection } from "./NotificationArea.style";

const itemList = [
	{
		id: 1,
		title: "2023.09.06 유치원 알림장 제목입니다.",
		content:
			"알림 내용입니다.알림 내용입니다.알림 내용입니다.알림 내용입니다.알림내용입니다.알림 내용입니다.알림 내용입니다.알림 내용입니다.알림내용입니다. 알림 내용입니다.알림 내용입니다.알림 내용입니다.알림내용입니다.",
		images: [
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDdfMjYz%2FMDAxNjc4MTU1OTMzMDc5.wqHjz46f4WsfBLm33ecDizoM04XPKcJFPlwyHlOtniAg.x9hPeMf6LSYlXCz1ez0zpTAT9Qg_kUYmHWe3qmjKE-sg.JPEG.lifestyle0095%2FKakaoTalk_20230307_111432149_01.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
		],
	},
	{
		id: 2,
		title: "2023.09.05 유치원 알림장 제목입니다.",
		content: "유치원 공지 내용입ㄴ다.",
		images: [
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDdfMjYz%2FMDAxNjc4MTU1OTMzMDc5.wqHjz46f4WsfBLm33ecDizoM04XPKcJFPlwyHlOtniAg.x9hPeMf6LSYlXCz1ez0zpTAT9Qg_kUYmHWe3qmjKE-sg.JPEG.lifestyle0095%2FKakaoTalk_20230307_111432149_01.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
		],
	},
	{
		id: 3,
		title: "2023.09.04 유치원 알림장 제목입니다.",
		content:
			"유치원 공지 내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원공지내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원 공지내용입ㄴ다.유치원 공지",
		images: [
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDdfMjYz%2FMDAxNjc4MTU1OTMzMDc5.wqHjz46f4WsfBLm33ecDizoM04XPKcJFPlwyHlOtniAg.x9hPeMf6LSYlXCz1ez0zpTAT9Qg_kUYmHWe3qmjKE-sg.JPEG.lifestyle0095%2FKakaoTalk_20230307_111432149_01.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
		],
	},
	{
		id: 4,
		title: "2023.09.03 유치원 알림장 제목입니다.",
		content:
			"유치원 공지 내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원공지내용입ㄴ다.유치원 공지 내용입ㄴ다.유치원 공지내용입ㄴ다.유치원 공지",
		images: [
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAzMDdfMjYz%2FMDAxNjc4MTU1OTMzMDc5.wqHjz46f4WsfBLm33ecDizoM04XPKcJFPlwyHlOtniAg.x9hPeMf6LSYlXCz1ez0zpTAT9Qg_kUYmHWe3qmjKE-sg.JPEG.lifestyle0095%2FKakaoTalk_20230307_111432149_01.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
			"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA0MDVfMTc2%2FMDAxNjQ5MTUwMDUxMzM1.B9dzoHg9YrFtRa3BmwC9WjfHX1z-z3vGGpnqNjLuih0g.VsXP-NNnE9z6oC1Q_MaYx64xSFvczNE4U4NjmPvF2Rcg.JPEG.grrbfl%2Foutput_619504066.jpg&type=sc960_832",
		],
	},
];

const NotificationArea = () => {
	return (
		<ContainerSection>
			{itemList.map(({ id, title, content, images }) => (
				<NotificationItem
					key={id}
					title={title}
					content={content}
					images={images}
				/>
			))}
		</ContainerSection>
	);
};

export default NotificationArea;
