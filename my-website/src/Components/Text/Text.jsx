import React from 'react';
import { Button, MainHeading, TextWrapper } from '../../GlobalStyles';
import { IconContext } from 'react-icons/lib';
import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
} from './TextStyles';
import { AboutData } from '../../Data/AboutData';


function Text() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<PricingSection id="pricing">
				<PricingWrapper>
					<MainHeading>Pick Your Best Option</MainHeading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Create, maintain and store your career with DigitalOcean.
					</TextWrapper>
					<PricingContainer>
						{AboutData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features.map((feature, index) => (
											<PricingCardFeature key={index}>
												{feature}
											</PricingCardFeature>
										))}
									</PricingCardFeatures>
                                    
<Button ><a style={{color:'#fff',textDecoration:'none'}} href='./registration' target='_self'>Get Started</a></Button>
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Text;