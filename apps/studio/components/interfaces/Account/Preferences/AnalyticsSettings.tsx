import { Toggle } from 'ui'

import { useConsentState } from 'common'
import Panel from 'components/ui/Panel'
import { useSendResetMutation } from 'data/telemetry/send-reset-mutation'

export const AnalyticsSettings = () => {
  const { hasAccepted, acceptAll, denyAll } = useConsentState()
  const { mutate: sendReset } = useSendResetMutation()

  const onToggleOptIn = () => {
    if (hasAccepted) {
      denyAll()
      sendReset()
    } else {
      acceptAll()
    }
  }

  return (
    <Panel title={<h5 key="panel-title">Analytics</h5>}>
      <Panel.Content>
        <Toggle
          checked={hasAccepted}
          onChange={onToggleOptIn}
          label="Opt-in to send telemetry data from the dashboard"
          descriptionText="By opting into sending telemetry data, Supabase can improve the overall dashboard user experience"
        />
      </Panel.Content>
    </Panel>
  )
}
