import mystyles from "styled-components";

const CardContainer = mystyles.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1%;
`;

const IndividualContainer = mystyles.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    border: solid silver 2px;
    border-radius: 10px;
    margin: 1% 0;
    background-color: rgba(0, 0, 0, 0.8);
`;

const TitleDateContainer = mystyles.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    border-bottom: solid silver 1px;
`;

const DateH3 = mystyles.h3`
    width: 98%;
    color: white;
    text-align: right;
`;

const ContentContainer = mystyles.div`
    display: flex;
    flex-direction: row-reverse;
    width: 90%;
    justify-content: space-between;
    margin-top: 1%;
`;

const TitleDescriptionContainer = mystyles.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 40%;
`;

const TitleContainer = mystyles.div`
    width: 100%;
    text-align: left;
`;

const TitleH2 = mystyles.h2`
    color: white;
`;

const DescriptionContainer = mystyles.div`
    width: 100%;
    display: flex;
    text-align: left;
    flex-direction: column;
    align-content: space-between;
`;

const DescriptionP = mystyles.p`
    width: 100%;
    line-height: 2rem;
    color: white;
`;

const ImageCredits = mystyles.p`
color: white;
font-size: .8rem;
`;

const ImageContainer = mystyles.div`
    width: 55%;
    display: flex;
    flex-direction: column;
`;

const Image = mystyles.img`
    width: 100%;
    border-radius: 5px;
`;


let Styles = {CardContainer, IndividualContainer, TitleDateContainer, DateH3, ContentContainer, TitleDescriptionContainer, TitleContainer, TitleH2, DescriptionContainer, DescriptionP, ImageCredits, ImageContainer, Image};
export default Styles;