import styled , {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Open Sans', sans-serif;    
}
`;
export const Container = styled.div`
width:100%;
max-width:1300px;
margin-right:auto;
margin-left:auto;
padding:0 50px;
@media screen and (max-width:960px){
    padding: 0 30px;
}
`;
export const MainHeading = styled.h1`
font-size:clamp(50px,6vw,80px);
margin-bottom:32px;
color:${({inverse})=>(inverse?'$403ae3':'#032D49 ')};
width:100%;
text-align:center;
padding-top:180px;

`;
export const HeroText = styled.h2`
font-size:clamp(40px,8vw,50px);
margin: ${({ margin }) => (margin ? margin : '')};
	margin-bottom: ${({ mb }) => (mb ? mb : '')};
	margin-top: ${({ mt }) => (mt ? mt : '')};
	letter-spacing: 0.4rem;
	line-height: 1.06;
	text-align: center;
	width: ${({ width }) => (width ? width : '100%')};
`;
export const TextWrapper = styled.span`

`
export const Text = styled.span`
font-size:30px;
color: ${({ color }) => (color ? color : '')};
font-size: ${({ size }) => (size ? size : '')};
font-weight: ${({ weight }) => (weight ? weight : '')};
letter-spacing: ${({ spacing }) => (spacing ? spacing : '')};
padding: ${({ padding }) => (padding ? padding : '')};
margin: ${({ margin }) => (margin ? margin : '')};
margin-bottom: ${({ mb }) => (mb ? mb : '')};
margin-top: ${({ mt }) => (mt ? mt : '')};
`;
export const Section = styled.section`
padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: ${({ inverse }) => (inverse ? 'white' : '#071c2f')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;
export const Row = styled.div`
display: flex;
justify-content: ${({ justify }) => (justify ? justify : '')};
align-items: ${({ align }) => (align ? align : '')};
gap: ${({ gap }) => (gap ? gap : '')};
padding: ${({ padding }) => (padding ? padding : '')};
margin: ${({ margin }) => (margin ? margin : '')};
position: ${({ position }) => (position ? position : '')};
width: ${({ width }) => (width ? width : 'auto')};
min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
height: ${({ height }) => (height ? height : 'auto')};
max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
`;
export const Column = styled.div`
display: flex;
	flex-direction: column;
	justify-content: ${({ justify }) => (justify ? justify : '')};
	align-items: ${({ align }) => (align ? align : '')};
	gap: ${({ gap }) => (gap ? gap : '')};
	padding: ${({ padding }) => (padding ? padding : '')};
	margin: ${({ margin }) => (margin ? margin : '')};
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
`;
export const Button = styled.button`
  border-radius:10px;
  background:white;
  color:#fff;
  padding:11.3px 20px;
  white-space:nowrap;
  font-size:15px;
  outline:none;
  cursor:pointer;
  overflow:hidden;
  position:relative;
  margin:10px;
  font-weight:600;
  border:none;
  background-size: 300% 100%;

    border-radius: 50px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;


&:hover {
    background-position: 100% 0;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

&:focus {
    outline: none;
}

& {
	background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
    box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
`;
export default GlobalStyle
