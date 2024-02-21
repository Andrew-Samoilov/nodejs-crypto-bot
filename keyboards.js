import { Markup } from "telegraf"

export function getMainMenu() {
    return Markup.keyboard([
        ['My currencies', 'Add currency'],
        ['Random fact']
    ]).resize();
}
