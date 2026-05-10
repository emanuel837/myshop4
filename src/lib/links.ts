export type BranchName =
  | 'ביאליק 4 - רמת גן'
  | 'שטיינר - אבן גבירול 46 תל אביב'
  | 'קניון הזהב - ראשון לציון'
  | 'רוטשילד 61 - כפר סבא'
  | 'קניון התחנה המרכזית - ירושלים'
  | 'קניון הקריון - קריית ביאליק'
  | 'אסף סנטר - באר יעקב'
  | 'קניון אורות - אור עקיבא'
  | 'קניון מרום - רמת גן'
  | 'עופר סנטר - נוף הגליל'
  | 'חוצות המפרץ - חיפה אאוטלט'
  | 'קניון ביג פאשן - בת ים'
  | 'קניותר - נס ציונה'
  | 'קניון השרון - נתניה'

export type BranchId =
  | 2
  | 3
  | 6
  | 7
  | 10
  | 15
  | 16
  | 21
  | 25
  | 26
  | 27
  | 37
  | 38
  | 39

export const BRANCH_IDS: Record<BranchName, BranchId> = {
  'ביאליק 4 - רמת גן': 2,
  'שטיינר - אבן גבירול 46 תל אביב': 3,
  'קניון הזהב - ראשון לציון': 6,
  'רוטשילד 61 - כפר סבא': 7,
  'קניון התחנה המרכזית - ירושלים': 10,
  'קניון הקריון - קריית ביאליק': 15,
  'אסף סנטר - באר יעקב': 16,
  'קניון אורות - אור עקיבא': 21,
  'קניון מרום - רמת גן': 25,
  'עופר סנטר - נוף הגליל': 26,
  'חוצות המפרץ - חיפה אאוטלט': 27,
  'קניון ביג פאשן - בת ים': 37,
  'קניותר - נס ציונה': 38,
  'קניון השרון - נתניה': 39,
}

export type LinkActionKey =
  | 'reportMissingOnline'
  | 'reportMissingOffline'
  | 'orderItem'
  | 'orderEquipment'
  | 'insoleProductionForm'
  | 'branchVisibilityPhoto'
  | 'homeDelivery'
  | 'checkPhoto'
  | 'branchIssue'
  | 'hotModel'
  | 'receivedPackage'
  | 'pickupOrder'
  | 'trackOrders'
  | 'trackLab'

const LAB_FORM_URL =
  'https://airtable.com/appZdzUZAvVj25hm9/pagm4eaXE9bdrgHoy/form'

const PICKUP_ORDER_FORM_URL =
  'https://airtable.com/appBawqi4kZnr8rtL/pagVF3qscSTQ8J2aV/form'

const EQUIPMENT_ORDER_URL =
  'https://airtable.com/appZdzUZAvVj25hm9/shrT50X5ooKiFYX0j'

const INSOLE_PRODUCTION_FORM_URL =
  'https://airtable.com/app65F930r3ynYmAm/pagf8mlP0DsNm8gdI/form'

const BRANCH_VISIBILITY_PHOTO_URL =
  'https://airtable.com/appMi9L7QDrJZ00cz/pagCGMJYj8vjY6sxd/form'

const HOME_DELIVERY_URL =
  'https://airtable.com/app98qOm1Vin8vcZC/pagULIx4PCOvR0cdj/form'

const CHECK_PHOTO_URL =
  'https://airtable.com/appZdzUZAvVj25hm9/pagSvqx2CmgjUlJX3/form'

const BRANCH_ISSUE_URL =
  'https://airtable.com/appMi9L7QDrJZ00cz/pagzat7HTp3YZUlIR/form'

const HOT_MODEL_URL =
  'https://airtable.com/appMi9L7QDrJZ00cz/pagal5LlJdq5yhn6y/form'

const REPORT_MISSING_ONLINE: Record<BranchName, string> = {
  'ביאליק 4 - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrmQVERqhkXImAqW',
  'שטיינר - אבן גבירול 46 תל אביב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shruS9JK2bomcyCXz',
  'קניון הזהב - ראשון לציון': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr9iWZiBprfFDWtU',
  'רוטשילד 61 - כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrigVAIOq04vbasi',
  'קניון התחנה המרכזית - ירושלים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrD9DwjkmqODuPkF',
  'קניון הקריון - קריית ביאליק': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrWO8ruUSt3dtpRb',
  'אסף סנטר - באר יעקב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrCZxG6XjJ4SnA1Y',
  'קניון אורות - אור עקיבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrEMrGDuDr9t0JQz',
  'קניון מרום - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrZGZB9rG32mi1PT',
  'עופר סנטר - נוף הגליל': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrz0ehdc1teTCjlO',
  'חוצות המפרץ - חיפה אאוטלט': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrtwIERnloRQnSl5',
  'קניון ביג פאשן - בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrwQ8xhB74QP9ZND',
  'קניותר - נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shruEpqVGBt3hnSkV',
  'קניון השרון - נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shroOlESUTCCVhvO7',
}

const REPORT_MISSING_OFFLINE: Record<BranchName, string> = {
  'ביאליק 4 - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr0hrMLagnzorPy1',
  'שטיינר - אבן גבירול 46 תל אביב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrUv2AjCfJp2WY35',
  'קניון הזהב - ראשון לציון': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrKxG7SlYt8rHt1B',
  'רוטשילד 61 - כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrf8jpJ6mayLI1c8',
  'קניון התחנה המרכזית - ירושלים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrxgmRoaqilvs5BF',
  'קניון הקריון - קריית ביאליק': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr3nQBuwippLvK5s',
  'אסף סנטר - באר יעקב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrau6FjMlQRnV5Jk',
  'קניון אורות - אור עקיבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrGbaUK7FrqZoSrA',
  'קניון מרום - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrUQsPKnLS7krjiR',
  'עופר סנטר - נוף הגליל': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrieEeBe1P8v69dC',
  'חוצות המפרץ - חיפה אאוטלט': 'https://airtable.com/appyGTA8v9mY4WcmQ/shry36dp8HLQj1xNm',
  'קניון ביג פאשן - בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrapk7hxt6IywSff',
  'קניותר - נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr3JxM96jk3ekS1H',
  'קניון השרון - נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr6dKBi1lpqLbhvM',
}

const ORDER_ITEM: Record<BranchName, string> = {
  'ביאליק 4 - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagTK72N5z1PXE2uq/form',
  'שטיינר - אבן גבירול 46 תל אביב': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagwc1WVkpEB5t8vc/form',
  'קניון הזהב - ראשון לציון': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagFyOTXOhE4Y6BWg/form',
  'רוטשילד 61 - כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/pag0ZtkMTZIpKDjPE/form',
  'קניון התחנה המרכזית - ירושלים': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagvLhhhbHg9sbYdN/form',
  'קניון הקריון - קריית ביאליק': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagkWc6iuzr6CMiAK/form',
  'אסף סנטר - באר יעקב': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagKDB4vqdZlBdmtj/form',
  'קניון אורות - אור עקיבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagUh51bquI7WvHJa/form',
  'קניון מרום - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagYLiZ0m863Cfabb/form',
  'עופר סנטר - נוף הגליל': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagUHAUdV25MvMmrQ/form',
  'חוצות המפרץ - חיפה אאוטלט': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagOQ0i9jZjJ2bkuh/form',
  'קניון ביג פאשן - בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagHnSwU0waY5eb3P/form',
  'קניותר - נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagbzIPCKg5oUFpMX/form',
  'קניון השרון - נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagWSiOPmHckVEwLB/form',
}

const RECEIVED_PACKAGE: Record<BranchName, string> = {
  'ביאליק 4 - רמת גן': 'https://airtable.com/appBawqi4kZnr8rtL/shrA4hMkvjFcZqsxQ',
  'שטיינר - אבן גבירול 46 תל אביב': 'https://airtable.com/appBawqi4kZnr8rtL/shrzJOm5HM3fMMGvs',
  'קניון הזהב - ראשון לציון': 'https://airtable.com/appBawqi4kZnr8rtL/shreY9RppZvNOleoR',
  'רוטשילד 61 - כפר סבא': 'https://airtable.com/appBawqi4kZnr8rtL/shrWWfqFKhbaqI6IW',
  'קניון התחנה המרכזית - ירושלים': 'https://airtable.com/appBawqi4kZnr8rtL/shrB0T1V3zqtv2WjB',
  'קניון הקריון - קריית ביאליק': 'https://airtable.com/appBawqi4kZnr8rtL/shrKXGbS0ZxYPX4OR',
  'אסף סנטר - באר יעקב': 'https://airtable.com/appBawqi4kZnr8rtL/shrBbt0KFWL4mJNGi',
  'קניון אורות - אור עקיבא': 'https://airtable.com/appBawqi4kZnr8rtL/shr3iSysY5Qlb2auf',
  'קניון מרום - רמת גן': 'https://airtable.com/appBawqi4kZnr8rtL/shruDcZDoTfctk9K2',
  'עופר סנטר - נוף הגליל': 'https://airtable.com/appBawqi4kZnr8rtL/shrmePtMlE5jOkq5v',
  'חוצות המפרץ - חיפה אאוטלט': 'https://airtable.com/appBawqi4kZnr8rtL/shrdlnyGKEMP5ZViI',
  'קניון ביג פאשן - בת ים': 'https://airtable.com/appBawqi4kZnr8rtL/shrDHyjUBLujra4G4',
  'קניותר - נס ציונה': 'https://airtable.com/appBawqi4kZnr8rtL/shrQTIt2lO51G3lp6',
  'קניון השרון - נתניה': 'https://airtable.com/appBawqi4kZnr8rtL/shrg4zdyFkP314H7Y',
}

const TRACK_ORDERS: Record<BranchName, string> = {
  'ביאליק 4 - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrc3RDwCu3HlPTLD',
  'שטיינר - אבן גבירול 46 תל אביב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr4rhxzUNv5535NW',
  'קניון הזהב - ראשון לציון': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrK8uPttUXtnaJVH',
  'רוטשילד 61 - כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrc26KRaYqrfscoT',
  'קניון התחנה המרכזית - ירושלים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrAxyvkGxbyC5to8',
  'קניון הקריון - קריית ביאליק': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr72yVrLhcwNvyLH',
  'אסף סנטר - באר יעקב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrDQBDZcaxNHPqRZ',
  'קניון אורות - אור עקיבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr3pO1fYrCiZqSdM',
  'קניון מרום - רמת גן': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrQlQ1riNoG3FG7P',
  'עופר סנטר - נוף הגליל': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrLqLKeyoSmdEM40',
  'חוצות המפרץ - חיפה אאוטלט': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr16HOGM4d2kG9SD',
  'קניון ביג פאשן - בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrShOUY4wk0jEuqx',
  'קניותר - נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrH0zXXtDRLHdWh8',
  'קניון השרון - נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrJg2DZMZRjhkmfb',
}

const TRACK_LAB: Record<BranchName, string> = {
  'ביאליק 4 - רמת גן': 'https://airtable.com/appZdzUZAvVj25hm9/shrOOuHF5XYjTXxh1',
  'שטיינר - אבן גבירול 46 תל אביב': 'https://airtable.com/appZdzUZAvVj25hm9/shrOOuHF5XYjTXxh1',
  'קניון הזהב - ראשון לציון': 'https://airtable.com/appZdzUZAvVj25hm9/shrx3MCOml3ORecHA',
  'רוטשילד 61 - כפר סבא': 'https://airtable.com/appZdzUZAvVj25hm9/shragbzEZkmfGQdGK',
  'קניון התחנה המרכזית - ירושלים': 'https://airtable.com/appZdzUZAvVj25hm9/shr1GGXkV0JT1O3ZC',
  'קניון הקריון - קריית ביאליק': 'https://airtable.com/appZdzUZAvVj25hm9/shrXfR8vTzBcmmZKF',
  'אסף סנטר - באר יעקב': 'https://airtable.com/appZdzUZAvVj25hm9/shrJJvD7clZzqg4ck',
  'קניון אורות - אור עקיבא': 'https://airtable.com/appZdzUZAvVj25hm9/shrcxoQiNRWv3Xexb',
  'קניון מרום - רמת גן': 'https://airtable.com/appZdzUZAvVj25hm9/shrLrYsrMwqThj9bt',
  'עופר סנטר - נוף הגליל': 'https://airtable.com/appZdzUZAvVj25hm9/shrhgPLDypJa7Oj2K',
  'חוצות המפרץ - חיפה אאוטלט': 'https://airtable.com/appZdzUZAvVj25hm9/shrjcBVZPhQIMMx2b',
  'קניון ביג פאשן - בת ים': 'https://airtable.com/appZdzUZAvVj25hm9/shrP2Q0MFDwmyiDJr',
  'קניותר - נס ציונה': 'https://airtable.com/appZdzUZAvVj25hm9/shrBHInzSyq12AmMi',
  'קניון השרון - נתניה': 'https://airtable.com/appZdzUZAvVj25hm9/shrlUI7c7SLeBhusE',
}

export function isBranchName(value: string): value is BranchName {
  return Object.prototype.hasOwnProperty.call(BRANCH_IDS, value)
}

export function getAirtableLink(
  action: LinkActionKey,
  branch: string,
): string | undefined {
  switch (action) {
    case 'orderEquipment':
      return EQUIPMENT_ORDER_URL
    case 'insoleProductionForm':
      return INSOLE_PRODUCTION_FORM_URL
    case 'branchVisibilityPhoto':
      return BRANCH_VISIBILITY_PHOTO_URL
    case 'homeDelivery':
      return HOME_DELIVERY_URL
    case 'checkPhoto':
      return CHECK_PHOTO_URL
    case 'branchIssue':
      return BRANCH_ISSUE_URL
    case 'hotModel':
      return HOT_MODEL_URL
  }

  if (!isBranchName(branch)) return undefined

  switch (action) {
    case 'reportMissingOnline':
      return REPORT_MISSING_ONLINE[branch]
    case 'reportMissingOffline':
      return REPORT_MISSING_OFFLINE[branch]
    case 'orderItem':
      return ORDER_ITEM[branch]
    case 'receivedPackage':
      return RECEIVED_PACKAGE[branch]
    case 'pickupOrder':
      return `${PICKUP_ORDER_FORM_URL}?prefill_%D7%A1%D7%A0%D7%99%D7%A3=${encodeURIComponent(
        branch,
      )}`
    case 'trackOrders':
      return TRACK_ORDERS[branch]
    case 'trackLab':
      return TRACK_LAB[branch]
  }
}

export function getLabFormUrl(_branch: string): string {
  return LAB_FORM_URL
}

