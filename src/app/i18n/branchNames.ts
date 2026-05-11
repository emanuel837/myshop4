import type { AppLanguage } from './I18nProvider'

const EN_REPLACEMENTS: Array<[string, string]> = [
  // Specific full-name mapping
  ['ביאליק 4 - רמת גן', 'Tiv Tov - Bialik 4, Ramat Gan'],

  // Substring mappings
  ['שטיינר', 'Shtainer Orthopedics'],
  ['אבן גבירול 46 תל אביב', 'Ibn Gabirol 46, Tel Aviv'],
  ['קניון הזהב', 'Gold Mall'],
  ['ראשון לציון', 'Rishon LeZion'],
  ['כפר סבא', 'Kfar Saba'],
  ['ירושלים', 'Jerusalem'],
  ['קריית ביאליק', 'Kiryat Bialik'],
  ['קריון', 'Kiryon'],
  ['אסף סנטר', 'Asaf Center'],
  ['קניון אורות', 'Orot Mall'],
  ['קניון מרום', 'Marom Mall'],
  ['עופר סנטר - נוף הגליל', 'Ofer Center - Nazareth Illit'],
  ['חוצות המפרץ', 'Hutzot Hamifratz'],
  ['קניון ביג פאשן - בת ים', 'Bat Yam Mall'],
  ['קניותר - נס ציונה', 'Nes Ziona Mall'],
  ['קניון השרון - נתניה', 'Sharon Netanya'],
]

const RU_REPLACEMENTS: Array<[string, string]> = [
  // Specific full-name mapping
  ['ביאליק 4 - רמת גן', 'Тив Тов - Биалик 4, Рамат Ган'],

  // Substring mappings
  ['שטיינר', 'Штайнер Ортопедия'],
  ['אבן גבירול 46 תל אביב', 'Ибн Гвироль 46, Тель-Авив'],
  ['קניון הזהב', 'Золотой молл'],
  ['ראשון לציון', 'Ришон ле-Цион'],
  ['כפר סבא', 'Кфар Саба'],
  ['ירושלים', 'Иерусалим'],
  ['קריית ביאליק', 'Кирьят Биалик'],
  ['קריון', 'Кирьон'],
  ['אסף סנטר', 'Центр Асаф'],
  ['קניון אורות', 'Молл Орот'],
  ['קניון מרום', 'Молл Маром'],
  ['עופר סנטר - נוף הגליל', 'Центр Офер - Нацрат Илит'],
  ['חוצות המפרץ', 'Хуцот Хамифрац'],
  ['קניון ביג פאשן - בת ים', 'Молл Бат Ям'],
  ['קניותר - נס ציונה', 'Молл Нес Циона'],
  ['קניון השרון - נתניה', 'Шарон Нетания'],
]

function applyReplacements(input: string, replacements: Array<[string, string]>) {
  let out = input
  for (const [from, to] of replacements) {
    if (!out.includes(from)) continue
    out = out.replaceAll(from, to)
  }
  return out
}

export function getBranchDisplayName(branchNameHe: string, lang: AppLanguage) {
  if (lang === 'he') return branchNameHe
  if (lang === 'en') return applyReplacements(branchNameHe, EN_REPLACEMENTS)
  return applyReplacements(branchNameHe, RU_REPLACEMENTS)
}

