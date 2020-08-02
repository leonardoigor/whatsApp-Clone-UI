import styled from 'styled-components';

export const Container = styled.div`
  background:linear-gradient(var(--green-deep)15%,var(--gray-deep)15%);
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Content = styled.div`
  width:72%;
  height:95%;
  background:#ededed;
  display:grid;
  grid-template-areas:
  'SIDE CT'
  ;
  grid-template-columns: 418px auto;

  @media (max-width: 1202px) {
      width:100%;
      height:100%;
    }

`