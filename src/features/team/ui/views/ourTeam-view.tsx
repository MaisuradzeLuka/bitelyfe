import Wrapper from "@/components/shared/wrapper";
import React from "react";
import TeamContainer from "../components/teamContainer";
import TeamIntro from "../components/teamIntro";

export default function OurTeam() {
  return (
    <Wrapper>
      <TeamIntro />
      <TeamContainer />
    </Wrapper>
  );
}
