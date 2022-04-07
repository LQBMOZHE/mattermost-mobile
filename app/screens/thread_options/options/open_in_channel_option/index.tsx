// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React, {useCallback} from 'react';
import {useIntl} from 'react-intl';

import {showPermalink} from '@actions/remote/permalink';
import {Screens} from '@constants';
import {useServerUrl} from '@context/server';
import {t} from '@i18n';
import {dismissBottomSheet} from '@screens/navigation';
import BaseOption from '@screens/post_options/options/base_option';

type Props = {
    threadId: string;
}
const OpenInChannelOption = ({threadId}: Props) => {
    const intl = useIntl();
    const serverUrl = useServerUrl();

    const onHandlePress = useCallback(async () => {
        await dismissBottomSheet(Screens.THREAD_OPTIONS);
        showPermalink(serverUrl, '', threadId, intl);
    }, [intl, serverUrl, threadId]);

    return (
        <BaseOption
            i18nId={t('global_threads.options.open_in_channel')}
            defaultMessage='Open in Channel'
            iconName='globe'
            onPress={onHandlePress}
            testID='thread.options.open_in_channel'
        />
    );
};

export default OpenInChannelOption;
