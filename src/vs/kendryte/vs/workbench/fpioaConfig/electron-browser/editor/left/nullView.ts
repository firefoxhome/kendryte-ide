import { IListFuncMapEntry, TEMPLATE_ID } from 'vs/kendryte/vs/workbench/fpioaConfig/electron-browser/editor/left/ids';
import { IListRenderer } from 'vs/base/browser/ui/list/list';

export class NullRenderer implements IListRenderer<IListFuncMapEntry, any> {
	get templateId(): string {
		return TEMPLATE_ID.FUNC_MAP_HIDE;
	}

	renderTemplate(parent: HTMLElement): void {
		parent.style.display = 'none';
		// parent.style.background = 'red';
	}

	renderElement(entry: IListFuncMapEntry, index: number, template: void): void {
	}

	public disposeElement(element: IListFuncMapEntry, index: number, templateData: any): void {
		// noop?
	}

	disposeTemplate(template: void): void {
	}
}
