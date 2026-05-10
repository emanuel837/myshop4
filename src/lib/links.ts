export type BranchName =
  | 'טיב טוב'
  | 'שטינר אורתופדיקה'
  | 'קניון הזהב'
  | 'כפר סבא'
  | 'ירושלים'
  | 'קריון'
  | 'אסף סנטר'
  | 'קניון אורות'
  | 'קניון מרום'
  | "דודג' סנטר"
  | 'חוצות המפרץ'
  | 'קניון בת ים'
  | 'קניון נס ציונה'
  | 'השרון נתניה'

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
  'טיב טוב': 2,
  'שטינר אורתופדיקה': 3,
  'קניון הזהב': 6,
  'כפר סבא': 7,
  ירושלים: 10,
  קריון: 15,
  'אסף סנטר': 16,
  'קניון אורות': 21,
  'קניון מרום': 25,
  "דודג' סנטר": 26,
  'חוצות המפרץ': 27,
  'קניון בת ים': 37,
  'קניון נס ציונה': 38,
  'השרון נתניה': 39,
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
  'https://airtable.com/appZdzUZAvVj25hm9/shrArLPPwSRpYAMDu'

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
  'טיב טוב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrmQVERqhkXImAqW',
  'שטינר אורתופדיקה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shruS9JK2bomcyCXz',
  'קניון הזהב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr9iWZiBprfFDWtU',
  'כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrigVAIOq04vbasi',
  ירושלים: 'https://airtable.com/appyGTA8v9mY4WcmQ/shrD9DwjkmqODuPkF',
  קריון: 'https://airtable.com/appyGTA8v9mY4WcmQ/shrWO8ruUSt3dtpRb',
  'אסף סנטר': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrCZxG6XjJ4SnA1Y',
  'קניון אורות': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrEMrGDuDr9t0JQz',
  'קניון מרום': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrZGZB9rG32mi1PT',
  "דודג' סנטר": 'https://airtable.com/appyGTA8v9mY4WcmQ/shrz0ehdc1teTCjlO',
  'חוצות המפרץ': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrtwIERnloRQnSl5',
  'קניון בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrwQ8xhB74QP9ZND',
  'קניון נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shruEpqVGBt3hnSkV',
  'השרון נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shroOlESUTCCVhvO7',
}

const REPORT_MISSING_OFFLINE: Record<BranchName, string> = {
  'טיב טוב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr0hrMLagnzorPy1',
  'שטינר אורתופדיקה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrUv2AjCfJp2WY35',
  'קניון הזהב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrKxG7SlYt8rHt1B',
  'כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrf8jpJ6mayLI1c8',
  ירושלים: 'https://airtable.com/appyGTA8v9mY4WcmQ/shrxgmRoaqilvs5BF',
  קריון: 'https://airtable.com/appyGTA8v9mY4WcmQ/shr3nQBuwippLvK5s',
  'אסף סנטר': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrau6FjMlQRnV5Jk',
  'קניון אורות': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrGbaUK7FrqZoSrA',
  'קניון מרום': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrUQsPKnLS7krjiR',
  "דודג' סנטר": 'https://airtable.com/appyGTA8v9mY4WcmQ/shrieEeBe1P8v69dC',
  'חוצות המפרץ': 'https://airtable.com/appyGTA8v9mY4WcmQ/shry36dp8HLQj1xNm',
  'קניון בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrapk7hxt6IywSff',
  'קניון נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr3JxM96jk3ekS1H',
  'השרון נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr6dKBi1lpqLbhvM',
}

const ORDER_ITEM: Record<BranchName, string> = {
  'טיב טוב': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagTK72N5z1PXE2uq/form',
  'שטינר אורתופדיקה': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagwc1WVkpEB5t8vc/form',
  'קניון הזהב': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagFyOTXOhE4Y6BWg/form',
  'כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/pag0ZtkMTZIpKDjPE/form',
  ירושלים: 'https://airtable.com/appyGTA8v9mY4WcmQ/pagvLhhhbHg9sbYdN/form',
  קריון: 'https://airtable.com/appyGTA8v9mY4WcmQ/pagkWc6iuzr6CMiAK/form',
  'אסף סנטר': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagKDB4vqdZlBdmtj/form',
  'קניון אורות': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagUh51bquI7WvHJa/form',
  'קניון מרום': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagYLiZ0m863Cfabb/form',
  "דודג' סנטר": 'https://airtable.com/appyGTA8v9mY4WcmQ/pagUHAUdV25MvMmrQ/form',
  'חוצות המפרץ': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagOQ0i9jZjJ2bkuh/form',
  'קניון בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagHnSwU0waY5eb3P/form',
  'קניון נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagbzIPCKg5oUFpMX/form',
  'השרון נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/pagWSiOPmHckVEwLB/form',
}

const RECEIVED_PACKAGE: Record<BranchName, string> = {
  'טיב טוב': 'https://airtable.com/appBawqi4kZnr8rtL/shrA4hMkvjFcZqsxQ',
  'שטינר אורתופדיקה': 'https://airtable.com/appBawqi4kZnr8rtL/shrzJOm5HM3fMMGvs',
  'קניון הזהב': 'https://airtable.com/appBawqi4kZnr8rtL/shreY9RppZvNOleoR',
  'כפר סבא': 'https://airtable.com/appBawqi4kZnr8rtL/shrWWfqFKhbaqI6IW',
  ירושלים: 'https://airtable.com/appBawqi4kZnr8rtL/shrB0T1V3zqtv2WjB',
  קריון: 'https://airtable.com/appBawqi4kZnr8rtL/shrKXGbS0ZxYPX4OR',
  'אסף סנטר': 'https://airtable.com/appBawqi4kZnr8rtL/shrBbt0KFWL4mJNGi',
  'קניון אורות': 'https://airtable.com/appBawqi4kZnr8rtL/shr3iSysY5Qlb2auf',
  'קניון מרום': 'https://airtable.com/appBawqi4kZnr8rtL/shruDcZDoTfctk9K2',
  "דודג' סנטר": 'https://airtable.com/appBawqi4kZnr8rtL/shrmePtMlE5jOkq5v',
  'חוצות המפרץ': 'https://airtable.com/appBawqi4kZnr8rtL/shrdlnyGKEMP5ZViI',
  'קניון בת ים': 'https://airtable.com/appBawqi4kZnr8rtL/shrDHyjUBLujra4G4',
  'קניון נס ציונה': 'https://airtable.com/appBawqi4kZnr8rtL/shrQTIt2lO51G3lp6',
  'השרון נתניה': 'https://airtable.com/appBawqi4kZnr8rtL/shrg4zdyFkP314H7Y',
}

const TRACK_ORDERS: Record<BranchName, string> = {
  'טיב טוב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrc3RDwCu3HIPTLD',
  'שטינר אורתופדיקה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr4rhxzUNv5535NW',
  'קניון הזהב': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrK8uPttUXtnaJVH',
  'כפר סבא': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrc26KRaYqrfscoT',
  ירושלים: 'https://airtable.com/appyGTA8v9mY4WcmQ/shrAxyvkGxbyC5to8',
  קריון: 'https://airtable.com/appyGTA8v9mY4WcmQ/shr72yVrLhcwNvyLH',
  'אסף סנטר': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrDQBDZcaxNHPqRZ',
  'קניון אורות': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr3pO1fYrCiZqSdM',
  'קניון מרום': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrQlQ1riNoG3FG7P',
  "דודג' סנטר": 'https://airtable.com/appyGTA8v9mY4WcmQ/shrLqLKeyoSmdEM40',
  'חוצות המפרץ': 'https://airtable.com/appyGTA8v9mY4WcmQ/shr16HOGM4d2kG9SD',
  'קניון בת ים': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrShOUY4wk0jEuqx',
  'קניון נס ציונה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrH0zXXtDRLHdWh8',
  'השרון נתניה': 'https://airtable.com/appyGTA8v9mY4WcmQ/shrJg2DZMZRjhkmfb',
}

const TRACK_LAB: Record<BranchName, string> = {
  'טיב טוב': 'https://airtable.com/appZdzUZAvVj25hm9/shrOOuHF5XYjTXxh1',
  'שטינר אורתופדיקה': 'https://airtable.com/appZdzUZAvVj25hm9/shrOOuHF5XYjTXxh1',
  'קניון הזהב': 'https://airtable.com/appZdzUZAvVj25hm9/shrx3MCOml3ORecHA',
  'כפר סבא': 'https://airtable.com/appZdzUZAvVj25hm9/shragbzEZkmfGQdGK',
  ירושלים: 'https://airtable.com/appZdzUZAvVj25hm9/shr1GGXkV0JT1O3ZC',
  קריון: 'https://airtable.com/appZdzUZAvVj25hm9/shrXfR8vTzBcmmZKF',
  'אסף סנטר': 'https://airtable.com/appZdzUZAvVj25hm9/shrJJvD7clZzqg4ck',
  'קניון אורות': 'https://airtable.com/appZdzUZAvVj25hm9/shrcxoQiNRWv3Xexb',
  'קניון מרום': 'https://airtable.com/appZdzUZAvVj25hm9/shrLrYsrMwqThj9bt',
  "דודג' סנטר": 'https://airtable.com/appZdzUZAvVj25hm9/shrhgPLDypJa7Oj2K',
  'חוצות המפרץ': 'https://airtable.com/appZdzUZAvVj25hm9/shrjcBVZPhQIMMx2b',
  'קניון בת ים': 'https://airtable.com/appZdzUZAvVj25hm9/shrP2Q0MFDwmyiDJr',
  'קניון נס ציונה': 'https://airtable.com/appZdzUZAvVj25hm9/shrBHInzSyq12AmMi',
  'השרון נתניה': 'https://airtable.com/appZdzUZAvVj25hm9/shrlUI7c7SLeBhusE',
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

export function getLabFormUrl(branch: string): string | undefined {
  if (!isBranchName(branch)) return undefined
  return `${LAB_FORM_URL}?prefill_%D7%A1%D7%A0%D7%99%D7%A3=${encodeURIComponent(
    branch,
  )}`
}

