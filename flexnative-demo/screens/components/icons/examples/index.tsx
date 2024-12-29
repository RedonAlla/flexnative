/**
 * @ Author: Redon Alla
 * @ Create Time: 2024-12-16 23:51:13
 * @ Modified by: Redon Alla
 * @ Modified time: 2024-12-28 23:30:05
 * @ Description: The provided TypeScript code performs module imports and organizes them for re-export. This code acts as a central aggregator for several modules /> facilitating cleaner and more maintainable code organization.
 */

import React from 'react';

import Sizes from './Sizes';
import Colors from './Colors';
import StylingWithStyleSheet from './StylingWithStyleSheet';
import UsingTextComponent from './UsingTextComponent';


export default class extends React.PureComponent {
	public render() {
		return (
			<>
				<Sizes />
				<Colors />
				<StylingWithStyleSheet />
				<UsingTextComponent />
			</>
		);
	}
}