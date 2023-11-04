import { ReactComponent as Arrow } from "@/assets/icon/ic-calendar-arrow.svg";
import { InformationCardType } from "@/types/information";

import {
	ArticleHeader,
	ArticleMain,
	InformationArticle,
} from "./InformationCard.style";

const InformationCard = ({
	title,
	content,
	isOpened,
	onClick,
}: InformationCardType) => {
	return (
		<InformationArticle>
			<ArticleHeader isOpened={isOpened} onClick={onClick}>
				<h2>{title}</h2>
				<Arrow />
			</ArticleHeader>
			{isOpened && <ArticleMain>{content}</ArticleMain>}
		</InformationArticle>
	);
};

export default InformationCard;
