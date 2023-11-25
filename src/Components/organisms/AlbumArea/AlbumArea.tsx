import AlbumItem from "@/components/Molecules/AlbumItem/AlbumItem";

import { ContainerSection } from "./AlbumArea.style";

const AlbumArea = () => {
	return (
		<ContainerSection>
			<h2>앨범</h2>
			<AlbumItem
				title="소풍을 다녀왔어요^^"
				content="	오늘은 사슴반 아이들과 함께 공원으로 소풍을 다녀왔어요! 직접 만든
					도시락을 먹으며 재밌는 시간을 보냈답니다^^"
				src="https://yimgf-thinkzon.yesform.com/docimgs/public/1/64/63081/63080871.jpg"
				createdAt="2023.09.06"
			/>
		</ContainerSection>
	);
};

export default AlbumArea;
