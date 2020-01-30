import React from "react";
import Styles from "./Styles";

const DateCard = props => {

    return (
        <Styles.IndividualContainer>
            <Styles.TitleDateContainer>
                <Styles.TitleContainer>
                    <Styles.TitleH2>{props.title}</Styles.TitleH2>
                </Styles.TitleContainer>
                <Styles.DateH3>{props.date}</Styles.DateH3>
            </Styles.TitleDateContainer>
            <Styles.ContentContainer>
                <Styles.TitleDescriptionContainer>
                    <Styles.DescriptionContainer>
                        <Styles.DescriptionP>
                            {props.explanation}
                        </Styles.DescriptionP>
                    </Styles.DescriptionContainer>
                </Styles.TitleDescriptionContainer>
                <Styles.ImageContainer>
                    <a href={props.hdurl} target={"_blank"}><Styles.Image src={props.url} alt={props.title} /></a>
                    <Styles.ImageCredits>
                                Image copyright: {props.copyright}
                    </Styles.ImageCredits>
                </Styles.ImageContainer>
            </Styles.ContentContainer>
        </Styles.IndividualContainer>
        
    )
};

export default DateCard;


