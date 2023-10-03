import {
	ContainerArticle,
	ContentDiv,
	ContentP,
	DateDiv,
	TitleSpan,
} from "./AlbumItem.style";

const AlbumItem = () => {
	return (
		<ContainerArticle>
			<img
				src="https://yimgf-thinkzon.yesform.com/docimgs/public/1/64/63081/63080871.jpg"
				alt="img"
			/>
			<ContentDiv>
				<TitleSpan>소풍을 다녀왔어요^^</TitleSpan>
				<ContentP>
					오늘은 사슴반 아이들과 함께 공원으로 소풍을 다녀왔어요! 직접 만든
					도시락을 먹으며 재밌는 시간을 보냈답니다^^
				</ContentP>
				<DateDiv>
					<span>2023.09.06</span>
				</DateDiv>
			</ContentDiv>
		</ContainerArticle>
	);
};

export default AlbumItem;
