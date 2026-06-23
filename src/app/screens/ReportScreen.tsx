import { useState } from 'react'
import {
  ActionCard,
  CHECK_MINUSES_ITEM,
  getActionIcon,
  type ActionItem,
} from '../components/ReportActionCard'
import { getAirtableLink } from '../../lib/links'
import { useI18n } from '../i18n/I18nProvider'

function IconChevronDown(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function IconAlert(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" />
    </svg>
  )
}

function IconFileText(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={props.className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
      <path d="M9 9h1" />
    </svg>
  )
}

function MissingReportCard({
  branch,
  onUnavailable,
}: {
  branch: string
  onUnavailable: (message: string) => void
}) {
  const { t } = useI18n()
  return (
    <section className="rounded-[24px] border border-amber-200 bg-[#FFF9C4] px-5 py-5 shadow-[0_2px_8px_rgba(35,54,103,0.08)]">
      <div className="flex flex-row items-center gap-3">
        <div className="grid h-12 w-12 flex-none place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/25 ring-1 ring-amber-300">
          <IconAlert className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-extrabold text-slate-950">
          {t('report.shortageTitle')}
        </h3>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => {
            const href = getAirtableLink('reportMissingOnline', branch)
            if (!href) {
              onUnavailable(t('app.unavailableForBranch'))
              return
            }
            window.open(href, '_blank', 'noopener,noreferrer')
          }}
          className="min-h-20 rounded-2xl bg-white px-3 py-4 text-center text-base font-extrabold text-amber-900 shadow-[0_2px_8px_rgba(35,54,103,0.08)] ring-1 ring-amber-200 transition-transform duration-100 hover:bg-amber-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/15"
        >
          {t('report.websiteOrders')}
        </button>

        <button
          type="button"
          onClick={() => {
            const href = getAirtableLink('reportMissingOffline', branch)
            if (!href) {
              onUnavailable(t('app.unavailableForBranch'))
              return
            }
            window.open(href, '_blank', 'noopener,noreferrer')
          }}
          className="grid min-h-20 place-items-center rounded-2xl bg-white px-3 py-4 text-center text-base font-extrabold text-amber-900 shadow-[0_2px_8px_rgba(35,54,103,0.08)] ring-1 ring-amber-200 transition-transform duration-100 hover:bg-amber-50 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500/15"
        >
          {t('report.branchOrders')}
        </button>
      </div>
    </section>
  )
}

const MAIN_ITEMS: ActionItem[] = [
  {
    titleKey: 'report.orderItem',
    subtitleKey: 'report.orderItemSubtitle',
    action: 'orderItem',
  },
  {
    titleKey: 'report.receivePackage',
    subtitleKey: 'report.receivePackageSubtitle',
    action: 'receivedPackage',
  },
  {
    titleKey: 'report.requestPickup',
    subtitleKey: 'report.requestPickupSubtitle',
    action: 'pickupOrder',
  },
  {
    titleKey: 'report.sendToLab',
    subtitleKey: 'report.sendToLabSubtitle',
    action: 'sendLab',
  },
  {
    titleKey: 'report.cancelOnlineOrder',
    subtitleKey: 'report.cancelOnlineOrderSubtitle',
    action: 'cancelOnlineOrder',
  },
  CHECK_MINUSES_ITEM,
]

const ADDITIONAL_ITEMS: ActionItem[] = [
  {
    titleKey: 'report.hotModel',
    subtitleKey: 'report.hotModelSubtitle',
    action: 'hotModel',
  },
  {
    titleKey: 'report.checkPhoto',
    subtitleKey: 'report.checkPhotoSubtitle',
    action: 'checkPhoto',
  },
  {
    titleKey: 'report.storeAppearance',
    subtitleKey: 'report.storeAppearanceSubtitle',
    action: 'branchVisibilityPhoto',
  },
  {
    titleKey: 'report.insoleForm',
    subtitleKey: 'report.insoleFormSubtitle',
    action: 'insoleProductionForm',
  },
  {
    titleKey: 'report.orderEquipment',
    subtitleKey: 'report.orderEquipmentSubtitle',
    action: 'orderEquipment',
  },
  {
    titleKey: 'report.homeDelivery',
    subtitleKey: 'report.homeDeliverySubtitle',
    action: 'homeDelivery',
  },
  {
    titleKey: 'report.reportIssue',
    subtitleKey: 'report.reportIssueSubtitle',
    action: 'branchIssue',
  },
]

function AdditionalReportsModal({
  branch,
  onClose,
  onUnavailable,
}: {
  branch: string
  onClose: () => void
  onUnavailable: (message: string) => void
}) {
  const { t } = useI18n()
  return (
    <div
      className="fixed inset-0 z-20"
      role="dialog"
      aria-modal="true"
      aria-label={t('report.moreReports')}
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/40"
        onClick={onClose}
        aria-label={t('home.close')}
      />
      <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-md rounded-t-[28px] bg-white p-4 text-slate-950 shadow-2xl ring-1 ring-[#233667]/15">
        <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-[#233667]/15" />
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold">{t('report.moreReports')}</h3>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-xl font-semibold leading-none text-slate-600 hover:bg-slate-200 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/30"
            onClick={onClose}
            aria-label={t('home.close')}
          >
            ×
          </button>
        </div>

        <div className="mt-3 max-h-[65vh] space-y-3 overflow-auto pb-2">
          {ADDITIONAL_ITEMS.map((item) => (
            <ActionCard
              key={item.action}
              item={item}
              branch={branch}
              onUnavailable={(message) => {
                onClose()
                onUnavailable(message)
              }}
              icon={getActionIcon(item.action)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

type ReportScreenProps = {
  branch: string
  onUnavailable: (message: string | null) => void
}

export default function ReportScreen({ branch, onUnavailable }: ReportScreenProps) {
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false)
  const { t } = useI18n()

  return (
    <main className="mx-auto max-w-md px-4 pb-28 pt-6">
      <h2 className="text-xl font-extrabold text-[#233667]">{t('tab.report')}</h2>

      <div className="mt-4 space-y-3">
        <MissingReportCard
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
        />
        <ActionCard
          item={MAIN_ITEMS[0]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[0].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[1]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[1].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[2]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[2].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[3]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[3].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[4]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[4].action)}
        />
        <ActionCard
          item={MAIN_ITEMS[5]}
          branch={branch}
          onUnavailable={(m) => onUnavailable(m)}
          icon={getActionIcon(MAIN_ITEMS[5].action)}
        />
        <button
          type="button"
          onClick={() => setIsAdditionalOpen(true)}
          className="w-full rounded-[24px] border border-[#233667]/15 bg-white px-5 py-5 text-start shadow-[0_2px_8px_rgba(35,54,103,0.08)] transition-transform duration-100 hover:border-[#233667]/25 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#233667]/15"
        >
          <div className="flex flex-row items-center gap-4">
            <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-slate-600 to-slate-700 text-white shadow-lg shadow-slate-700/20 ring-1 ring-slate-400">
              <IconFileText className="h-6 w-6" />
            </div>

            <div className="min-w-0 flex-1 text-right">
              <div className="text-lg font-extrabold text-slate-950">
                {t('report.moreReports')}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-500">
                {t('report.moreReportsSubtitle')}
              </div>
            </div>

            <div className="flex-none text-slate-500" aria-hidden="true">
              <IconChevronDown className="h-5 w-5" />
            </div>
          </div>
        </button>
      </div>

      {isAdditionalOpen ? (
        <AdditionalReportsModal
          branch={branch}
          onClose={() => setIsAdditionalOpen(false)}
          onUnavailable={(m) => onUnavailable(m)}
        />
      ) : null}
    </main>
  )
}
