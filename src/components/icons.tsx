import { IconGithub, IconFolder, IconCheck, IconArrow } from "./icons/in";

// eslint-disable-next-line import/no-default-export
export default function Icon(data: { name: string }): JSX.Element {
	switch (data.name) {
		case "Github":
			return <IconGithub />;
		case "Folder":
			return <IconFolder />;
		case "Check":
			return <IconCheck />;
		case "Arrow":
			return <IconArrow />;
		default:
			return <IconGithub />;
	}
}

/*

// directory
import Icon from './icons'

// Icon
<Icon name="Github" />

*/
