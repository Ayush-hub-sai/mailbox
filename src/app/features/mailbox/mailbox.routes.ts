import { Routes } from '@angular/router';
import { MailboxComponent } from './mailbox.component';

export const MAILBOX_ROUTES: Routes = [
    {
        path: '',
        component: MailboxComponent,
        children: [
            { path: '', redirectTo: 'inbox', pathMatch: 'full' },

            {
                path: 'inbox',
                loadComponent: () =>
                    import('../mailbox/inbox/inbox.component').then(m => m.InboxComponent)
            },
            {
                path: 'flagged',
                loadComponent: () =>
                    import('../mailbox/flagged/flagged.component').then(m => m.FlaggedComponent)
            },
            {
                path: 'draft',
                loadComponent: () =>
                    import('../mailbox/draft/draft.component').then(m => m.DraftComponent)
            },
            {
                path: 'sent',
                loadComponent: () =>
                    import('../mailbox/sent/sent.component').then(m => m.SentComponent)
            },
            {
                path: 'trash',
                loadComponent: () =>
                    import('../mailbox/trash/trash.component').then(m => m.TrashComponent)
            }
        ]
    }
];
