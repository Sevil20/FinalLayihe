import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const FeaturesData = [
	{
		name: 'Programming ',
		description: 'Programming is the mental process of thinking up instructions to give to a machine (like a computer).',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Ease of Use',
		description: 'Our system is easy to use and integrate',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Maintenance',
		description: 'Our code is written in highest standards, which makes it highly sustainable',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Collabration',
		description: '“The problem with programming is not that the computer isn’t logical—the computer is terribly logical, relentlessly literal-minded.”',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Course',
		description: 'We offer the highest value/cost ratio',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Scalable',
		description:
			'Our servers are located all over the world, therefore improving scalability and speed ',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];