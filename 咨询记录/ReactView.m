//
//  ReactView.m
//  咨询记录
//
//  Created by mzr  on 16/5/4.
//  Copyright © 2016年 mzr . All rights reserved.
//

#import "ReactView.h"
#import "RCTRootView.h"

@implementation ReactView

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

- (instancetype)initWithCoder:(NSCoder *)coder
{
    self = [super initWithCoder:coder];
    if (self) {
        [self setReactView];
    }
    return self;
}


-(void) setReactView{
    NSURL *jsContent = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios"];
    
    RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsContent moduleName:@"Record" initialProperties:nil launchOptions:nil];
    
    [self addSubview:rootView];
    rootView.frame = [UIScreen mainScreen].bounds;
}







@end
