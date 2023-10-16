import { StyledArticleCard, StyledImageContainer } from "./ArticleCard.styles";

interface ArticleCardProps {
  title: string;
  body: string;
  image?: string;
  primaryColorGradient?: string;
  secondaryColorGradient?: string;
}

export const ArticleCard = ({
  image,
  title,
  body,
  primaryColorGradient = "#1254FF",
  secondaryColorGradient = "#70F6FF",
}: ArticleCardProps) => {
  return (
    <StyledArticleCard>
      <StyledImageContainer
        primaryColorGradient={primaryColorGradient}
        secondaryColorGradient={secondaryColorGradient}
      >
        <img className="w-16 h-16" src={image}></img>
      </StyledImageContainer>
      <h3 className="font-bold pb-2">{title}</h3>
      <p>{body}</p>
    </StyledArticleCard>
  );
};
