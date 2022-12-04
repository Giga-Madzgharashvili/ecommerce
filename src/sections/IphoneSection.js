import { Container } from "@mui/material";
import React from "react";
import styled from "styled-components";
import iphone from "./img/iphone-bg.png"

const IphoneBg = styled("div")({
  width: "100%",
  background:
    "linear-gradient(45deg, rgba(255, 72, 88, 1) 0%, rgba(143, 101, 255, 1) 100%);",
});

const IphoneSectionWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});

const IphoneSectionTitle = styled("div")({
  maxWidth: "520px",
  width: "100%",
});

const SectionTitle = styled("h2")({
  fontSize: "30px",
  lineHeight: "40px",
  color: "silver",
  fontWeight: "bolder",
  marginBottom: "30px",
});

const IphoneText = styled("p")({
  fontSize: "18px",
  color: "silver",
  lineHeight: "20px",
});

const Iphonebackground = styled("div")({
    maxWidth: "729px",
    width: "100%"
});

const IphoneBgImg = styled("img")({
    width: "100%",
    display: "block"
});

const IphoneItemWrapper = styled("div")({
    margin: "89px auto",
    maxWidth: "1170px",
    width: "100%"
});

const IphoneTitle = styled("h2") ({
    fontSize: "50px",
    fontWeight: "800",
    lineHeight: "80px",
    textAlign: "center"
});

const IphoneItem = styled("div")({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center"
});

const Item = styled("div")({
    maxWidth: "270px",
    width: "100%",
    height: "349px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px 2px 15px #aaa",
    borderRadius: "10px",
    cursor: "pointer",
    marginBottom: "20px"
})

const IphoneSection = () => {
  return (
    <section id="iphone">
      <IphoneBg>
        <Container maxWidth="xl">
          <IphoneSectionWrapper>
            <IphoneSectionTitle>
              <SectionTitle>
                Apple-ის ოფიციალური პარტნიორი საქართველოში Apple Premium
                Reseller-ის სტატუსით, სადაც შეგიძლიათ, შეიძინოთ iPhone
              </SectionTitle>
              <IphoneText>
                თითქმის ყველა სმარტფონის მომხმარებელს უფიქრია iPhone- ის
                შეძენაზე. ეს ყველაფერი იმითაა განპირობებული, რომ ერთ დროს Apple–
                მა უდიდესი მიღწევა შეიტანა ტექნოლოგიების სფეროში და მსოფლიოს
                წარუდგინა გაჯეტები, რომლებიც სმარტფონის სრულიად ახალი დონის
                დემონსტრირებას ახდენდა. </IphoneText>
                <IphoneText> iPhone– ის ყველა მოდელი, რომლებიც 2007
                წლიდან გამოვიდა, განსხვავდებოდა სხვა ბრენდის მოწყობილობებისაგან
                თანამედროვე ფუნქციებით, დახვეწილი დიზაინით და უმაღლესი ხარისხით.
                ამ ფაქტს მსოფლიოში მილიონობით მომხმარებელი დარწმუნებით
                ამტკიცებს, რომლებიც iPhone-ის შენაძენს აკეთებენ წლიდან წლამდე.
              </IphoneText>
            </IphoneSectionTitle>
            <Iphonebackground>
            <IphoneBgImg src={iphone} alt="iphone"/>
            </Iphonebackground>
          </IphoneSectionWrapper>
        </Container>
      </IphoneBg>
      <Container maxWidth="xl">
        <IphoneItemWrapper>
            <IphoneTitle>iPhone</IphoneTitle>
            <IphoneItem>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            </IphoneItem>
        </IphoneItemWrapper>
      </Container>
    </section>
  );
};

export default IphoneSection;
