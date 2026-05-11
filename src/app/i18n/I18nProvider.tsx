import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type AppLanguage = 'he' | 'en' | 'ru'

type I18nContextValue = {
  lang: AppLanguage
  setLang: (lang: AppLanguage) => void
  t: (key: TranslationKey) => string
}

export type TranslationKey =
  | 'app.unavailableForBranch'
  | 'action.orderItem'
  | 'action.sendLab'
  | 'action.receivedPackage'
  | 'home.card.orderItemSubtitle'
  | 'home.card.sendLabSubtitle'
  | 'home.card.receivedPackageSubtitle'
  | 'tab.report'
  | 'tab.tracking'
  | 'tab.info'
  | 'tab.branches'
  | 'tab.home'
  | 'search.placeholder'
  | 'home.hi'
  | 'home.employeeFallback'
  | 'home.branchLabel'
  | 'home.chooseBranch'
  | 'home.logout'
  | 'home.close'
  | 'home.branchSelectTitle'
  | 'home.selected'
  | 'home.noResults'
  | 'report.shortageTitle'
  | 'report.websiteOrders'
  | 'report.branchOrders'
  | 'report.moreReports'
  | 'report.orderItem'
  | 'report.receivePackage'
  | 'report.requestPickup'
  | 'report.sendToLab'
  | 'report.hotModel'
  | 'report.checkPhoto'
  | 'report.storeAppearance'
  | 'report.insoleForm'
  | 'report.orderEquipment'
  | 'report.homeDelivery'
  | 'report.reportIssue'
  | 'report.cancelOnlineOrder'
  | 'report.orderItemSubtitle'
  | 'report.receivePackageSubtitle'
  | 'report.requestPickupSubtitle'
  | 'report.sendToLabSubtitle'
  | 'report.hotModelSubtitle'
  | 'report.checkPhotoSubtitle'
  | 'report.storeAppearanceSubtitle'
  | 'report.insoleFormSubtitle'
  | 'report.orderEquipmentSubtitle'
  | 'report.homeDeliverySubtitle'
  | 'report.reportIssueSubtitle'
  | 'report.cancelOnlineOrderSubtitle'
  | 'report.moreReportsSubtitle'
  | 'tracking.trackOrders'
  | 'tracking.trackLabStatus'
  | 'tracking.confirmPackage'
  | 'tracking.trackOrdersSubtitle'
  | 'tracking.trackLabStatusSubtitle'
  | 'tracking.confirmPackageSubtitle'
  | 'info.myDetails'
  | 'info.employeeName'
  | 'info.currentBranch'
  | 'info.changeBranch'
  | 'info.usefulLinks'
  | 'info.blueHeartWebsite'
  | 'info.version'
  | 'info.notSet'
  | 'login.accessCode'
  | 'login.enter'
  | 'login.goodMorning'
  | 'login.goodAfternoon'
  | 'login.goodEvening'
  | 'login.prompt'
  | 'login.invalidCode'
  | 'login.lockedPrefix'
  | 'login.minutesSuffix'
  | 'login.logoAlt'
  | 'employeeDetails.title'
  | 'employeeDetails.fullName'
  | 'employeeDetails.myBranch'
  | 'employeeDetails.enterSystem'
  | 'employeeDetails.errorFillAll'
  | 'employeeDetails.branchPlaceholder'
  | 'employeeDetails.namePlaceholder'
  | 'branches.searchLabel'
  | 'branches.searchPlaceholder'
  | 'branches.noBranches'
  | 'branches.call'
  | 'branches.noPhone'
  | 'branches.callAriaPrefix'
  | 'home.searchLabel'
  | 'home.branchDialogAria'

const LS_LANGUAGE = 'myshop4.language'

const translations: Record<AppLanguage, Record<TranslationKey, string>> = {
  he: {
    'app.unavailableForBranch': 'הפעולה אינה זמינה עבור הסניף שלך',
    'action.orderItem': 'הזמנת פריט',
    'action.sendLab': 'שליחה למעבדה',
    'action.receivedPackage': 'קיבלתי חבילה מכץ',
    'home.card.orderItemSubtitle': 'להזמין פריט עבור לקוח במהירות ובקלות',
    'home.card.sendLabSubtitle': 'לפתוח פנייה ולשלוח פריט לתיקון / בדיקה',
    'home.card.receivedPackageSubtitle': 'לעדכן שהחבילה הגיעה ולסיים את הטיפול',
    'tab.report': 'דיווח',
    'tab.tracking': 'מעקב',
    'tab.info': 'מידע',
    'tab.branches': 'סניפים',
    'tab.home': 'בית',
    'search.placeholder': 'חפש פעולה...',
    'home.hi': 'היי',
    'home.employeeFallback': 'עובד',
    'home.branchLabel': 'סניף: ',
    'home.chooseBranch': 'בחרו סניף',
    'home.logout': 'התנתקות',
    'home.close': 'סגור',
    'home.branchSelectTitle': 'בחירת סניף',
    'home.selected': 'נבחר',
    'home.noResults': 'לא נמצאו תוצאות',
    'report.shortageTitle': 'דיווח על חוסר',
    'report.websiteOrders': 'הזמנות אתר',
    'report.branchOrders': 'הזמנות סניפים',
    'report.moreReports': 'דיווחים נוספים',
    'report.orderItem': 'הזמנת פריט',
    'report.receivePackage': 'קבלת חבילה מכץ',
    'report.requestPickup': 'הזמנת איסוף',
    'report.sendToLab': 'שליחה למעבדה',
    'report.hotModel': 'דגם חם 🔥',
    'report.checkPhoto': "צילום צ'ק",
    'report.storeAppearance': 'צילום נראות הסניף',
    'report.insoleForm': 'הזנת טופס ייצור מדרסים',
    'report.orderEquipment': 'הזמנת ציוד',
    'report.homeDelivery': 'משלוח עד הבית',
    'report.reportIssue': 'דיווח על תקלה',
    'report.cancelOnlineOrder': 'ביטול עסקה מהאתר',
    'report.orderItemSubtitle': 'להזמין פריט מהמחסן או מסניף אחר',
    'report.receivePackageSubtitle': 'לעדכן קבלת חבילה',
    'report.requestPickupSubtitle': 'הזמנת איסוף מהסניף',
    'report.sendToLabSubtitle': 'שליחת פריט לבדיקת מעבדה',
    'report.hotModelSubtitle': 'לדווח על מוצר עם ביקוש גבוה',
    'report.checkPhotoSubtitle': "שליחת צילום של צ'ק",
    'report.storeAppearanceSubtitle': 'כל יום ראשון עד 12:00',
    'report.insoleFormSubtitle': 'הזנת טופס לייצור מדרסים ללקוח',
    'report.orderEquipmentSubtitle': 'להזמין ציוד לסניף',
    'report.homeDeliverySubtitle': 'שליחת הזמנה עד הבית של הלקוח',
    'report.reportIssueSubtitle': 'לדווח על תקלה בסניף',
    'report.cancelOnlineOrderSubtitle': 'לביטול עסקה שבוצעה באתר',
    'report.moreReportsSubtitle': 'פתיחת פעולות נוספות',
    'tracking.trackOrders': 'מעקב אחר הזמנות',
    'tracking.trackLabStatus': 'מעקב בדיקת מעבדה',
    'tracking.confirmPackage': 'קבלת חבילה מכץ',
    'tracking.trackOrdersSubtitle': 'ראה סטטוס הזמנות',
    'tracking.trackLabStatusSubtitle': 'ראה סטטוס תיקונים',
    'tracking.confirmPackageSubtitle': 'אשר קבלת חבילה',
    'info.myDetails': 'פרטי העובד שלי',
    'info.employeeName': 'שם העובד',
    'info.currentBranch': 'סניף נוכחי',
    'info.changeBranch': 'החלפת סניף',
    'info.usefulLinks': 'קישורים שימושיים',
    'info.blueHeartWebsite': 'אתר הלב הכחול',
    'info.version': 'גרסה',
    'info.notSet': 'לא הוגדר',
    'login.accessCode': 'קוד גישה',
    'login.enter': 'כניסה',
    'login.goodMorning': 'בוקר טוב',
    'login.goodAfternoon': 'צהריים טובים',
    'login.goodEvening': 'ערב טוב',
    'login.prompt': 'הזינו קוד גישה בן 4 ספרות',
    'login.invalidCode': 'קוד גישה שגוי. נסו שוב.',
    'login.lockedPrefix': 'הגישה נחסמה. נסה שוב בעוד',
    'login.minutesSuffix': 'דקות',
    'login.logoAlt': 'הלב הכחול',
    'employeeDetails.title': 'פרטי העובד',
    'employeeDetails.fullName': 'שם מלא',
    'employeeDetails.myBranch': 'אני מסניף',
    'employeeDetails.enterSystem': 'כניסה למערכת',
    'employeeDetails.errorFillAll': 'נא למלא שם מלא ולבחור סניף.',
    'employeeDetails.branchPlaceholder': 'בחרו סניף…',
    'employeeDetails.namePlaceholder': 'לדוגמה: ישראל ישראלי',
    'branches.searchLabel': 'חיפוש סניף',
    'branches.searchPlaceholder': 'חיפוש לפי שם סניף',
    'branches.noBranches': 'לא נמצאו סניפים',
    'branches.call': 'התקשר',
    'branches.noPhone': 'אין מספר זמין',
    'branches.callAriaPrefix': 'התקשר אל',
    'home.searchLabel': 'חיפוש פעולה',
    'home.branchDialogAria': 'בחירת סניף',
  },
  en: {
    'app.unavailableForBranch': 'This action is not available for your branch',
    'action.orderItem': 'Order Item',
    'action.sendLab': 'Send to Lab',
    'action.receivedPackage': 'Received Package',
    'home.card.orderItemSubtitle': 'Order an item from warehouse or another branch',
    'home.card.sendLabSubtitle': 'Send item for lab inspection or repair',
    'home.card.receivedPackageSubtitle':
      'Confirm package arrival and close the process',
    'tab.report': 'Report',
    'tab.tracking': 'Tracking',
    'tab.info': 'Info',
    'tab.branches': 'Branches',
    'tab.home': 'Home',
    'search.placeholder': 'Search action...',
    'home.hi': 'Hi',
    'home.employeeFallback': 'Employee',
    'home.branchLabel': 'Branch: ',
    'home.chooseBranch': 'Choose branch',
    'home.logout': 'Logout',
    'home.close': 'Close',
    'home.branchSelectTitle': 'Select Branch',
    'home.selected': 'Selected',
    'home.noResults': 'No results found',
    'report.shortageTitle': 'Report Shortage',
    'report.websiteOrders': 'Website Orders',
    'report.branchOrders': 'Branch Orders',
    'report.moreReports': 'More Reports',
    'report.orderItem': 'Order Item',
    'report.receivePackage': 'Receive Package',
    'report.requestPickup': 'Request Pickup',
    'report.sendToLab': 'Send to Lab',
    'report.hotModel': 'Hot Model',
    'report.checkPhoto': 'Check Photo',
    'report.storeAppearance': 'Store Appearance',
    'report.insoleForm': 'Insole Form',
    'report.orderEquipment': 'Order Equipment',
    'report.homeDelivery': 'Home Delivery',
    'report.reportIssue': 'Report Issue',
    'report.cancelOnlineOrder': 'Cancel Online Order',
    'report.orderItemSubtitle': 'Order an item from the warehouse or another branch',
    'report.receivePackageSubtitle': 'Update package received',
    'report.requestPickupSubtitle': 'Request pickup from the branch',
    'report.sendToLabSubtitle': 'Send an item for lab inspection',
    'report.hotModelSubtitle': 'Report a high-demand product',
    'report.checkPhotoSubtitle': 'Send a check photo',
    'report.storeAppearanceSubtitle': 'Every Sunday until 12:00',
    'report.insoleFormSubtitle': 'Submit an insole production form for a customer',
    'report.orderEquipmentSubtitle': 'Order equipment for the branch',
    'report.homeDeliverySubtitle': 'Send an order to the customer’s home',
    'report.reportIssueSubtitle': 'Report a branch issue',
    'report.cancelOnlineOrderSubtitle': 'Cancel an order made on the website',
    'report.moreReportsSubtitle': 'Open additional actions',
    'tracking.trackOrders': 'Track Orders',
    'tracking.trackLabStatus': 'Track Lab Status',
    'tracking.confirmPackage': 'Confirm Package',
    'tracking.trackOrdersSubtitle': 'See order status',
    'tracking.trackLabStatusSubtitle': 'See repair status',
    'tracking.confirmPackageSubtitle': 'Confirm package received',
    'info.myDetails': 'My Details',
    'info.employeeName': 'Employee Name',
    'info.currentBranch': 'Current Branch',
    'info.changeBranch': 'Change Branch',
    'info.usefulLinks': 'Useful Links',
    'info.blueHeartWebsite': 'Blue Heart Website',
    'info.version': 'Version',
    'info.notSet': 'Not set',
    'login.accessCode': 'Access Code',
    'login.enter': 'Enter',
    'login.goodMorning': 'Good Morning',
    'login.goodAfternoon': 'Good Afternoon',
    'login.goodEvening': 'Good Evening',
    'login.prompt': 'Enter 4-digit access code',
    'login.invalidCode': 'Invalid access code. Please try again.',
    'login.lockedPrefix': 'Access locked. Try again in',
    'login.minutesSuffix': 'minutes',
    'login.logoAlt': 'Blue Heart',
    'employeeDetails.title': 'Employee Details',
    'employeeDetails.fullName': 'Full Name',
    'employeeDetails.myBranch': 'My Branch',
    'employeeDetails.enterSystem': 'Enter System',
    'employeeDetails.errorFillAll': 'Please enter full name and select a branch.',
    'employeeDetails.branchPlaceholder': 'Choose branch…',
    'employeeDetails.namePlaceholder': 'Example: John Doe',
    'branches.searchLabel': 'Search Branch',
    'branches.searchPlaceholder': 'Search by branch name',
    'branches.noBranches': 'No branches found',
    'branches.call': 'Call',
    'branches.noPhone': 'No phone available',
    'branches.callAriaPrefix': 'Call',
    'home.searchLabel': 'Search action',
    'home.branchDialogAria': 'Select Branch',
  },
  ru: {
    'app.unavailableForBranch': 'Действие недоступно для вашего филиала',
    'action.orderItem': 'Заказ товара',
    'action.sendLab': 'Отправка в мастерскую',
    'action.receivedPackage': 'Получена посылка',
    'home.card.orderItemSubtitle': 'Заказать товар со склада или другого филиала',
    'home.card.sendLabSubtitle': 'Отправить товар на проверку или ремонт',
    'home.card.receivedPackageSubtitle': 'Подтвердить получение посылки',
    'tab.report': 'Отчёт',
    'tab.tracking': 'Отслеживание',
    'tab.info': 'Информация',
    'tab.branches': 'Филиалы',
    'tab.home': 'Домой',
    'search.placeholder': 'Поиск действия...',
    'home.hi': 'Привет',
    'home.employeeFallback': 'Сотрудник',
    'home.branchLabel': 'Филиал: ',
    'home.chooseBranch': 'Выберите филиал',
    'home.logout': 'Выйти',
    'home.close': 'Закрыть',
    'home.branchSelectTitle': 'Выбор филиала',
    'home.selected': 'Выбрано',
    'home.noResults': 'Ничего не найдено',
    'report.shortageTitle': 'Сообщить о нехватке',
    'report.websiteOrders': 'Заказы с сайта',
    'report.branchOrders': 'Заказы филиалов',
    'report.moreReports': 'Доп. отчёты',
    'report.orderItem': 'Заказ товара',
    'report.receivePackage': 'Получить посылку',
    'report.requestPickup': 'Запросить забор',
    'report.sendToLab': 'Отправка в мастерскую',
    'report.hotModel': 'Горячая модель',
    'report.checkPhoto': 'Фото чека',
    'report.storeAppearance': 'Фото магазина',
    'report.insoleForm': 'Форма стелек',
    'report.orderEquipment': 'Заказ оборудования',
    'report.homeDelivery': 'Доставка на дом',
    'report.reportIssue': 'Сообщить о проблеме',
    'report.cancelOnlineOrder': 'Отмена онлайн заказа',
    'report.orderItemSubtitle': 'Заказать товар со склада или из другого филиала',
    'report.receivePackageSubtitle': 'Обновить получение посылки',
    'report.requestPickupSubtitle': 'Запросить забор из филиала',
    'report.sendToLabSubtitle': 'Отправить товар на проверку',
    'report.hotModelSubtitle': 'Сообщить о товаре с высоким спросом',
    'report.checkPhotoSubtitle': 'Отправить фото чека',
    'report.storeAppearanceSubtitle': 'Каждое воскресенье до 12:00',
    'report.insoleFormSubtitle': 'Отправить форму на изготовление стелек для клиента',
    'report.orderEquipmentSubtitle': 'Заказать оборудование для филиала',
    'report.homeDeliverySubtitle': 'Отправить заказ домой клиенту',
    'report.reportIssueSubtitle': 'Сообщить о проблеме в филиале',
    'report.cancelOnlineOrderSubtitle': 'Отменить заказ с сайта',
    'report.moreReportsSubtitle': 'Открыть дополнительные действия',
    'tracking.trackOrders': 'Отслеживать заказы',
    'tracking.trackLabStatus': 'Статус мастерской',
    'tracking.confirmPackage': 'Подтвердить посылку',
    'tracking.trackOrdersSubtitle': 'Посмотреть статус заказов',
    'tracking.trackLabStatusSubtitle': 'Посмотреть статус ремонта',
    'tracking.confirmPackageSubtitle': 'Подтвердить получение посылки',
    'info.myDetails': 'Мои данные',
    'info.employeeName': 'Имя сотрудника',
    'info.currentBranch': 'Текущий филиал',
    'info.changeBranch': 'Сменить филиал',
    'info.usefulLinks': 'Полезные ссылки',
    'info.blueHeartWebsite': 'Сайт Blue Heart',
    'info.version': 'Версия',
    'info.notSet': 'Не задано',
    'login.accessCode': 'Код доступа',
    'login.enter': 'Войти',
    'login.goodMorning': 'Доброе утро',
    'login.goodAfternoon': 'Добрый день',
    'login.goodEvening': 'Добрый вечер',
    'login.prompt': 'Введите 4-значный код доступа',
    'login.invalidCode': 'Неверный код доступа. Попробуйте снова.',
    'login.lockedPrefix': 'Доступ заблокирован. Повторите через',
    'login.minutesSuffix': 'мин.',
    'login.logoAlt': 'Blue Heart',
    'employeeDetails.title': 'Данные сотрудника',
    'employeeDetails.fullName': 'Полное имя',
    'employeeDetails.myBranch': 'Мой филиал',
    'employeeDetails.enterSystem': 'Войти в систему',
    'employeeDetails.errorFillAll': 'Введите полное имя и выберите филиал.',
    'employeeDetails.branchPlaceholder': 'Выберите филиал…',
    'employeeDetails.namePlaceholder': 'Например: Иван Иванов',
    'branches.searchLabel': 'Поиск филиала',
    'branches.searchPlaceholder': 'Поиск по названию филиала',
    'branches.noBranches': 'Филиалы не найдены',
    'branches.call': 'Позвонить',
    'branches.noPhone': 'Телефон недоступен',
    'branches.callAriaPrefix': 'Позвонить в',
    'home.searchLabel': 'Поиск действия',
    'home.branchDialogAria': 'Выбор филиала',
  },
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<AppLanguage>(() => {
    try {
      const raw = localStorage.getItem(LS_LANGUAGE)
      return raw === 'en' || raw === 'ru' || raw === 'he' ? raw : 'he'
    } catch {
      return 'he'
    }
  })

  const setLang = (next: AppLanguage) => {
    setLangState(next)
    try {
      localStorage.setItem(LS_LANGUAGE, next)
    } catch {
      // ignore
    }
  }

  const t = (key: TranslationKey) => translations[lang][key] ?? translations.he[key]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t }), [lang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}

