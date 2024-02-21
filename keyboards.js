import { Markup } from "telegraf"

export function getMainMenu() {
    return Markup.keyboard([
        ['My coins', 'Add coins', 'Remove coins'],
        ['Random fact']
    ]).resize();
}
